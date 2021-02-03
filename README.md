# Responsive Bubble effect

this is a css responsive project,
after a certain media point it create a clip path bubble effect for hamburger

## HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="main.css">
</head>
<body>
    <nav>
        <h1 class="logo">Hola</h1>
        <ul class="nav-link">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Work</a></li>
            
        </ul>
        <div class="hamburger" id="hamburger">&#9776;</div>
    </nav>
    
    <script src="main.js"></script>
</body>
</html>
```
## CSS
```css
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.hamburger{
   position: absolute;
   top: 24%;
   right: 20px;
   font-size: 30px;
   font-weight: 300;
   color: white;
   display: none;
   cursor: pointer;
}

nav{
    height: 10vh;
    background: #86a555;
    position: relative;
}
.logo{
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: 30px;
    color: white;
}
.nav-link{
    display: flex;
    list-style: none;
    width: 50%;
    height: 100%;
    justify-content:space-evenly;
    align-items: center;
    margin-left: auto;
    
}
.nav-link li a{
    color: white;
    text-decoration: none;
    font-size: 20px;
}

.landing{
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; 
}
.landing h1{
    font-size: 50px;
    color: rgb(50, 38, 61);
}
@media screen and (max-width: 800px){
    .hamburger{
        display: block;
    }
    .nav-link{
        /*display: none;*/
        position: absolute;
        background: #86a555;
        height: 100vh;
        width: 100%;
        flex-direction: column;
        clip-path: circle(100px at 90% -10%);
        -webkit-clip-path: circle(100px at 100% -10%);
        transition: all 0.6s ease-out;
    }
    .nav-link.open{
        clip-path: circle(100px at 90% -10%);
        -webkit-clip-path: circle(800px at 100% -10%);
    }
        
    
}
```
## JS
```js
const hamburger = document.querySelector(".hamburger");
const navlink = document.querySelector(".nav-link");


hamburger.addEventListener("click", () => {
    navlink.classList.toggle("open");
})
```
