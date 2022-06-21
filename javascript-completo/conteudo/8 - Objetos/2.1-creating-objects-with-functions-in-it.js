//objects literals

// const blogs = [
//     {title: 'why mac & cheese rules', likes: 30},
//     {title: '10 things to make with marmite', likes: 50}
// ];

//console.log(blogs);

//If a object has one or more methods, we say it has behavior.
let user = {
    name: 'Crystal',
    age: 30,
    email: 'crystal@gmail.com',
    location: 'Berlin',
    blogs: [
        {title: 'why mac & cheese rules', likes: 30},
        {title: '10 things to make with marmite', likes: 50}
    ],
    login: function(){
        console.log('The user logged in')
    },
    logout: function(){
        console.log('The user logged out')
    },
    logBlogs: function(){
        //this.blogs
        console.log('This user has written the following blogs: ');
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);
        });
    }
};

//Métodos são funções definidas em um objeto.

user.login()
user.logout()
user.logBlogs()