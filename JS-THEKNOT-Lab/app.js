console.log('app.js is connected')

let arr = [
    {
    icon: "far fa-heart fa-2x",
    title: "Wedding Vision",
    description: "Define your wedding style and get matched with local vendors."
   }, 
   {
   icon: "fas fa-desktop fa-2x",
   title: "Wedding Websites",
   description: "Create your free custom website to share with family and friends."
   },
   {
   icon: "fas fa-money-check-alt fa-2x",
   title: "Budgeter",
   description:"Get a personalized spending plan based on your unique budget."
   },
   {
   icon: "far fa-list-alt fa-2x",
   title: "Checklist",
   description:"Always know what to do, when, with your 24/7 wedding planner."
   },
   {
   icon: "fas fa-user-check fa-2x",
   title: "Guest List",
   description:"Gather addresses, collect RSVPs, track thank-you notes and more."
   },
   {
   icon: "fas fa-concierge-bell fa-2x",
   title: "Vendor List",
   description:"Streamline your vendor contacts and get pro recommendations."
   },
   {
   icon: "fas fa-gift fa-2x",
   title: "Registry",
   description:"Your retail, cash, experience and charity registries, all in one place."
   },
   {
   icon: "far fa-clock fa-2x",
   title: "Wedding Day Timeline",
   description:"The who, what, when and where of your wedding day in one timeline."
   }
]

let $ul = $('<ul>');
$('nav').append($ul);
function makeIcons () {
    for(i=0; i<arr.length; i++) {
        //create li and append to ul
        let $li = $('<li>');
        $ul.append($li);
        //add class to li
        $li.addClass('ItemContainer');
        //create a and append to li
        let $a = $('<a>');
        $li.append($a);
        //create divs and sppend to a
        let $imageDiv = $('<div>').addClass('ImageContainer');
        let $itemDiv = $('<div>').addClass('ItemContentContainer');
        $a.append($imageDiv);
        $a.append($itemDiv);
        //create i and append to imageDiv
        let $i = $('<i>').addClass(arr[i].icon);
        $imageDiv.append($i)
        //create h4 and p, and append to itemDiv
        let $h4 = $('<h4>').text(arr[i].title);
        let $p = $('<p>').text(arr[i].description);
        $itemDiv.append($h4);
        $itemDiv.append($p);

    }
}
makeIcons()

