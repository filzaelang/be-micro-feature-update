# How to Use Pemilu Backend with Postman

## How to Use Authorization

1. Open Postman.
2. Click on the 'Authorization' tab.
3. Choose 'Bearer Token' on the left.
4. Insert the Token on the right.

## A. User

1. Register User

- **URL:** http://localhost:5000/api/v1/auth/register
- **Method:** POST
- **JSON Body Example:**

  ```json
  {
    "fullName": "Rian Kopling",
    "address": "Surakarta",
    "gender": "male",
    "username": "rian",
    "password": "12345678",
    "role": "admin" (Note: there are three options admin, editor and ghost)
  }

2. Login

- **URL:** http://localhost:5000/api/v1/auth/login
- **Method:** POST
- **JSON Body Example:**

  ```json
  {
    "username": "rian",
    "password": "12345678"
  }
  ```
Note: you will received token which is used to authorization

3. Delete User

- **URL:** http://localhost:5000/api/v1/user/:id
- **Method:** DELETE

4. Get All User

## B. Article

1. Getting All Articles (No Authorization)

- **URL:** http://localhost:5000/api/v1/artikel
- **Method:** GET

2. Getting a Specific Article (No Authorization)

- **URL:** http://localhost:5000/api/v1/artikel/:id
- **Method:** GET

3. Create an Article (Authorization Required)

- **URL:** http://localhost:5000/api/v1/artikel
- **Method:** POST
- **Form-data Body Example:**
  ```
    title         = JKT48 Ikut meramaikan pemilu
    article       = JKT48 menggelar konser di gelora bung karno
    imageArticle  = (Note: file)
    date          = 2023-02-13
  ```
4. Update an Article (Authorization Required)

- **URL:** http://localhost:5000/api/v1/artikel/:id
- **Method:** PATCH
- **Form-data Body Example:**
  ```
    title         = JKT48 Ikut meramaikan pemilu V.20
    article       = JKT48 menggelar konser di gelora bung karno V.20
    imageArticle  = (Note: file)
    date          = 2023-02-12
  ```
5. Delete an Article (Authorization Required)

- **URL:** http://localhost:5000/api/v1/artikel/:id
- **Method:** DELETE

## C. Voter

1. Getting All Votes (Authorization Required)

- **URL:** http://localhost:5000/api/v1/vote
- **Method:** GET

2. Voting (Authorization Required)

- **URL:** http://localhost:5000/api/v1/vote
- **Method:** POST
- **JSON Body Example:**

  ```json
  {
    "votedPaslon": 1
  }
  ```
## D. Paslon

1. Getting All Paslons (No Authorization)

- **URL:** http://localhost:5000/api/v1/paslon
- **Method:** GET

2. Getting a Specific Paslon (No Authorization)

- **URL:** http://localhost:5000/api/v1/paslon/:id
- **Method:** GET

3. Create a Paslon (Authorization Required)

- **URL:** http://localhost:5000/api/v1/paslon
- **Method:** POST
- **Form-data Body Example:**
  ```
    name                 = Kawaki
    no                   = 2
    visionAndMission     = Membunuh semua otsusuki
    imagePaslon          = (Note: file)
  ```
4. Update a Paslon (Authorization Required)

- **URL:** http://localhost:5000/api/v1/artikel/:id
- **Method:** PATCH
- **Form-data Body Example:**
  ```
    name               = Kawaki V2.0
    no                 = 2 V2.0
    visionAndMission   = Membunuh semua otsusuki V2.0
    imagePaslon        = (Note: file)
  ```
5. Delete a Paslon (Authorization Required)

- **URL:** http://localhost:5000/api/v1/artikel/:id
- **Method:** DELETE

## E. Partai

1. Getting All Partais (No Authorization)

- **URL:** http://localhost:5000/api/v1/partais
- **Method:** GET

2. Getting a Specific Partai (No Authorization)

- **URL:** http://localhost:5000/api/v1/partai/:id
- **Method:** GET

3. Create a Partai (Authorization Required)

- **URL:** http://localhost:5000/api/v1/partai
- **Method:** POST
- **Form-data Body Example:**
  ```
    name             = Partai Wibu Indonesia
    chairman         = Yoga
    visionAndMission = Meningkatkan kualitas wibu indonesia menjadi berstandard internasional
    address          = Bandung
    imagePartai      = (Note: file)
    paslon           = 1 (paslonId)
  ```
4. Update a Partai (Authorization Required) 

- **URL:** http://localhost:5000/api/v1/partai/:id
- **Method:** PATCH
- **Form-data Body Example:**
  ```
    name             = Partai Wibu Indonesia V2.0
    chairman         = Yoga V2.0
    visionAndMission = Meningkatkan kualitas wibu indonesia menjadi berstandard internasional V2.0
    address          = Tangerang V2.0
    imagePartai      = (Note: file)
    paslon           = 1 (paslonId)
  ```
5. Delete a Partai (Authorization Required)

- **URL:** http://localhost:5000/api/v1/partai/:id
- **Method:** DELETE
