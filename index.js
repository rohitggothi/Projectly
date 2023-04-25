
function SubForm() {
    $.ajax({
        url: 'https://api.apispreadsheets.com/data/pMFKGErevHswJy0z/',
        type: 'post',
        data: $("#myForm").serializeArray(),
        success: function () {
            alert("Data Sent Successfully!! :)")
        },
        error: function () {
            alert("Please!!! Connect to Internet:(")
        }
    });

}
function subfoot() {
    $.ajax({
        url: 'https://api.apispreadsheets.com/data/OPP3r5ntod2Ay9Fn/',
        type: 'post',
        data: $("#footform").serializeArray(),
        success: function () {
            var rohit="Subscribed!!";
            document.getElementById('btn-sub').innerHTML=rohit;      
        },
        error: function () {
            alert("Please!!! Connect to Internet :(")
        },
        
    });

}

function android() {
    const scroll = document.getElementById('contact');
    scroll.scrollIntoView();
    var setText = "Android Project :";
    document.getElementById('msg').value = setText;
}
function web() {
    const scroll = document.getElementById('contact');
    scroll.scrollIntoView();
    var setText = "Web Development Project :";
    document.getElementById('msg').value = setText;
}
function uiux() {
    const scroll = document.getElementById('contact');
    scroll.scrollIntoView();
    var setText = "UI / UX Project :";
    document.getElementById('msg').value = setText;
}
function trigent() {
    window.open("https://www.trigent.com/");
}
function impect() {
    window.open("https://www.thedigitalgroup.com/");
}
function esko() {
    window.open("https://www.esko.com/en");
}
function ashish() {
    window.open("https://www.instagram.com/ashish_patel.06/");
}
function rohit() {
    window.open("https://www.instagram.com/rohitggothi/");
}
function abhi() {
    window.open("https://www.instagram.com/abhishek_parmar12/");
}