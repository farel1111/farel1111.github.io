data =[{
    'img1':'asset/look at 2.jpg',
    'img2':'asset/project.jpg',
    'title':'Web E-comerce',
    'subtitle':'zenit',
    'desc':'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis natus inventore, atque voluptates vel ex perferendis maxime aspernatur eum voluptatum quas vero amet dignissimos, ipsam, perspiciatis cum impedit labore pariatur'

}, {
    'img1':'asset/web-design.png',
    'img2':'asset/web-design.png',
    'title':'Web design',
    'subtitle':'The Gallery',
    'desc':'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis natus inventore, atque voluptates vel ex perferendis maxime aspernatur eum voluptatum quas vero amet dignissimos, ipsam, perspiciatis cum impedit labore pariatur'  
}]

var container = document.querySelector('container-project')
data.forEach(element => {
    container.innerHTML+=
    ` <div class="project">
    <div class="img-project">
        <img src=`+element.img1+`/" alt="">
        <img src=`+element.img2+` alt="">
    </div>
    <div class="desc-project">
        <h1>Web ${element.title}</h1>
        <h2>${element.subtitle}</h2>
        <p>${element.desc}</p>
    </div>
    <button class="Read-More">Read More</Button>
</div>
`
});