```javascript
const query = { name: 'John Doe' };

db.collection('users').findOne(query, (err, user) => {
  if (err) throw err; // Handle error properly
  if (!user) {
    console.log('User not found'); // Check for null
  } else {
    console.log('Found:', user);
  }
});
```