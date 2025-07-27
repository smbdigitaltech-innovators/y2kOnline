-- Firebase Firestore Index Creation Instructions
-- 
-- This script provides the steps to create the required composite index
-- for the reviews collection in Firebase Firestore.

-- STEP 1: Go to Firebase Console
-- Navigate to: https://console.firebase.google.com/project/y2k-academy/firestore/indexes

-- STEP 2: Create Composite Index
-- Click "Create Index" and configure:
-- Collection ID: reviews
-- Fields to index:
--   1. approved (Ascending)
--   2. createdAt (Descending)
--   3. __name__ (Ascending) - automatically added

-- STEP 3: Alternative - Use the direct link provided in the error:
-- https://console.firebase.google.com/v1/r/project/y2k-academy/firestore/indexes?create_composite=Cktwcm9qZWN0cy95MmstYWNhZGVteS9kYXRhYmFzZXMvKGRlZmF1bHQpL2NvbGxlY3Rpb25Hcm91cHMvcmV2aWV3cy9pbmRleGVzL18QARoMCghhcHByb3ZlZBABGg0KCWNyZWF0ZWRBdBACGgwKCF9fbmFtZV9fEAI

-- STEP 4: Wait for index creation (usually takes a few minutes)
-- The index status will show "Building" then "Enabled" when ready

-- STEP 5: Test the application
-- Once the index is created, the reviews will load with proper ordering

-- Note: The application will still work without the index, 
-- but reviews won't be sorted by creation date until the index is ready.

SELECT 'Firebase Composite Index Creation Instructions' as message;
SELECT 'Collection: reviews' as collection;
SELECT 'Fields: approved (ASC), createdAt (DESC)' as index_fields;
SELECT 'Status: Manual creation required in Firebase Console' as status;
