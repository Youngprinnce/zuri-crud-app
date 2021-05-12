## simple-api-crud

A project for ZuriTest

### Tech stack
- ExpressJS
- MongoDB

### MVC
No view needed, just Postman it

### Database Schema

#### PROFLE
- name
- country
- email

#### Routes API
#### PROFILE
Routes | HTTP | Description
--- | --- | ---
**v1/api/profile** | `GET` | Get all profiles
**v1/api/profile/create** | `POST` | Create a profile
**v1/api/profile/:id** | `DELETE` | Delete a profile
**v1/api/profile/:id** | `PUT` | Update data of a profile

#### NOTE
- CRUD, careful when update.
- No relationship 😄

#### Step

##### Release 0
- Documenting first. READ.ME
  - Description
  - Step
  - Schema

##### Release 1
- foods CRUD

##### Release 2
- restaurants CRUD

##### Release 3
- Refactor

### Installation guide
```
git clone git@github.com:dikyarga/simple-api-crud.git
cd simple-api-crud
npm install
npm run dev
```
