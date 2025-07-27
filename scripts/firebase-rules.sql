-- Firebase Firestore Security Rules
-- Copy these rules to your Firebase Console > Firestore Database > Rules

rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read access to approved reviews
    match /reviews/{reviewId} {
      allow read: if resource.data.approved == true;
      allow create: if request.auth == null && 
                   request.resource.data.keys().hasAll(['name', 'review', 'rating', 'createdAt']) &&
                   request.resource.data.approved == false &&
                   request.resource.data.rating is number &&
                   request.resource.data.rating >= 1 &&
                   request.resource.data.rating <= 5;
      allow update, delete: if false; // Only admins should update/delete
    }
    
    // Deny all other access
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
