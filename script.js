window.addEventListener('resize',()=>{
    let mobile_img = 'images/image-header-mobile.jpg';
    let desktop_img = 'images/image-header-desktop.jpg';
    let img_location = document.querySelector('.left_side img');
    if(window.innerWidth>1024){
        img_location.setAttribute('src',desktop_img)
    }else{
        img_location.setAttribute('src',mobile_img);
    }
})