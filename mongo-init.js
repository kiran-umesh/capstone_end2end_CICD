db = db.getSiblingDB('jobdatabase'); 
db.createUser({
  user: 'kiran',
  pwd: 'mangodb123',
  roles: [
    {
      role: 'readWrite',
      db: 'jobdatabase',
    },
  ],
});

print('Database and user created successfully!');
