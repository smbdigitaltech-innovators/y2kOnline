-- Firebase Firestore Security Rules
-- Copy these rules to your Firebase Console > Firestore Database > Rules
-- Then click "Publish" to apply them

rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow public read and write access to reviews collection
    match /reviews/{reviewId} {
      // Allow anyone to read reviews
      allow read: if true;
      
      // Allow anyone to create new reviews
      allow create: if true;
      
      // Allow anyone to update reviews (optional - you can restrict this)
      allow update: if true;
      
      // Allow anyone to delete reviews (optional - you can restrict this)
      allow delete: if true;
    }
    
    // Allow read/write access to connection_test collection (for testing)
    match /connection_test/{testId} {
      allow read, write: if true;
    }
    
    // Deny access to all other collections by default
    match /{document=**} {
      allow read, write: if false;
    }
  }
}

-- Alternative more restrictive rules (if you want to limit operations):
-- 
-- rules_version = '2';
-- service cloud.firestore {
--   match /databases/{database}/documents {
--     match /reviews/{reviewId} {
--       // Allow anyone to read reviews
--       allow read: if true;
--       
--       // Allow anyone to create reviews with required fields
--       allow create: if request.resource.data.keys().hasAll(['name', 'review', 'rating', 'createdAt']) &&
--                     request.resource.data.rating is number &&
--                     request.resource.data.rating >= 1 &&
--                     request.resource.data.rating <= 5;
--       
--       // Only allow updates to specific fields
--       allow update: if request.resource.data.diff(resource.data).affectedKeys()
--                     .hasOnly(['review', 'rating']);
--       
--       // Allow delete (you can restrict this further if needed)
--       allow delete: if true;
--     }
--     
--     match /connection_test/{testId} {
--       allow read, write: if true;
--     }
--     
--     match /{document=**} {
--       allow read, write: if false;
--     }
--   }
-- }
