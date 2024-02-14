// ג'ייסון המכיל את יחדות התוכן שיוצגו בדף
const jsonData = {
    "generators": [
        {
            "id": 1,
            "title": "טיסו",
            "catagory":"אלמנטים",
            "info":"בד משי תלוי במאונך שניתן לפצל לשני חבלים",
            "images":[
                "images/tissue/5ed8bede-f068-4346-ba52-5f0c46178a1b.jpg",
                "images/tissue/BD3531A8-01A8-45EF-AF2F-F24C5A9AFC11.jpg",
                "images/tissue/IMG_6770.jpeg"
            ],
        },
        {
            "id": 2,
            "title": "חבל",
            "catagory":"אלמנטים",
            "info":"חבל עבה שתלוי במאונך ועליו מטפסים",
            "images":[
                "images/rope/IMG_5433_Original.PNG",
                "images/rope/rotem1.jpeg",
                "images/rope/rotem2.jpeg"
            ],
        },
        {
            "id": 3,
            "title": "טרפז",
            "catagory":"אלמנטים",
            "info":"תלוי כנדנדה עם חבלים תלויים על מוט שנקרא בר",
            "images":[
                "images/trappeze/IMG_5840.jpg",
                "images/trappeze/IMG_9506.JPG",
                "images/trappeze/IMG_9507.JPG"
            ],
        },
        {
            "id": 4,
            "title": "חישוק (ליברה)",
            "catagory":"אלמנטים",
            "info":"חישוק התלוי במאונך, עשוי מברזל ועטוף בסרט",
            "images":[
                "images/lybra/1caacb46-5cca-46bf-a329-0ea3dcf26a27.jpg",
                "images/lybra/IMG_5050.jpeg",
                "images/lybra/IMG_5058.jpeg"
            ],
        },
        {
            "id": 5,
            "title": "רצועות",
            "catagory":"אלמנטים",
            "info":"שתי רצועות קצרות התלויות במאונך, ובסופן לולאת אחיזה",
            "images":[
                "images/straps/IMG_5842.jpg",
                "images/straps/aya1.jpeg",
                "images/straps/aya2.jpeg"
            ],
        },
        {
            "id": 6,
            "title": "פייק",
            "catagory":"תרגילים",
            "info":"רגליים ישרות לראש, נבצע בכלל האלמנטים",
            "images":[
                "images/videos/paik.mp4",
                "images/videos/thumbnail/paik.jpg"
            ],
        },
        {
            "id": 7,
            "title": "בירדנסט",
            "catagory":"תרגילים",
            "info":"תנוחת ערסל בעזרת הקשטת הגב כאשר הרגליים גבוהות מהידיים, נבצע באלמנטים טיסו, טרפז, חישוק ורצועות",
            "images":[
                "images/videos/birdnest.mp4",
                "images/videos/thumbnail/birdnest.jpg"
            ],
        },
        {
            "id": 8,
            "title": "ז׳רה",
            "catagory":"תרגילים",
            "info":"כיפוף רגליים צמודות על בר ושחרור הגוף מטה, נבצע באלמנטים טרפז וחישוק",
            "images":[
                "images/videos/jere.mp4",
                "images/videos/thumbnail/jere.jpg"
            ],
        },
        {
            "id": 9,
            "title": "מיטוק",
            "catagory":"תרגילים",
            "info":"החזקה של הגוף על יד אחת כאשר הרגליים נצמדות אל הגוף, נבצע באלמנטים חבל, טרפז, חישוק ורצועות",
            "images":[
                "images/videos/mituk.mp4",
                "images/videos/thumbnail/mituk.jpg"
            ],
        },
        {
            "id": 10,
            "title": "סטרדל",
            "catagory":"תרגילים",
            "info":"הרמת רגליים בפיסוק מעל הראש והחזקת גב ישר, נבצע בכלל האלמנטים",
            "images":[
                "images/videos/stradel.mp4",
                "images/videos/thumbnail/stradel.jpg"
            ],
        }
    ]};
//פונקציה הפועלת בעת הרצת הדף
document.addEventListener("DOMContentLoaded", function (event) {
    createItems("All")

    // פניה אל כפתורי הסינון בדף
    const radioButtons = document.querySelectorAll('input[name="categorySort"]');
    //מעבר על כפתורי הסינון והפעלת פונקציה בעת שינוי הבחירה
    radioButtons.forEach(function (radioButton) {
        radioButton.addEventListener('change', function () {// הפעלת פונקציה שבודקת איזה כפתור סינון נבחר
            const unitsToDelete = document.getElementById('all-units');
            // מחיקת תוכן הדף על מנת לשנות את הסינון
            unitsToDelete.remove();

            const selectedCategory = this.id; //שמירת הסינון שנבחר
            createItems(selectedCategory); 
        });
    });
});

function createItems(category) {
    // הבאת האלמנט העוטף בו ניצור את התוכן בדף
    const itemsContainer = document.getElementById('unitsContainer');
    // יצירת תגית של div
    const unitsList = document.createElement("div");
    // השמת מזהה לתגית
    unitsList.setAttribute("id", "all-units");

    unitsList.innerHTML ="";

    // מעבר על הג'ייסון והוספה של פריט לדף בכל סיבוב
    jsonData.generators.forEach(generator => {
        // יצירה של תגית הפריט
       
        if(generator.catagory == "אלמנטים" && (category == "elements" || category == "All")){// בדיקה האם אלמנטים כלול בסינון הנוכחי
            if (generator.id == 1){//בדיקה האם זו היחידה הראשונה על מנת להוסיף כותרת
                unitsList.innerHTML += `
                <h2>אלמנטים</h2>
                `
            }
            // יצירת קרוסלת תמונות לכל יחידת תוכן שכלולה באלמנטים, כותרת ומידע
        unitsList.innerHTML +=`
        <div class="${generator.catagory} oneUnit">
            <div id="carouselExampleIndicators${generator.id}" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators${generator.id}" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators${generator.id}" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators${generator.id}" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="${generator.images[0]}" class="d-block w-100" alt="${generator.title}">
                    </div>
                    <div class="carousel-item">
                        <img src="${generator.images[1]}" class="d-block w-100" alt="${generator.title}">
                    </div>
                    <div class="carousel-item">
                        <img src="${generator.images[2]}" class="d-block w-100" alt="${generator.title}">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators${generator.id}" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators${generator.id}" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            <h3>${generator.title}</h3>
            <p>${generator.info}</p>
        </div>
        `
        }else if(generator.catagory == "תרגילים" && (category == "exercises" || category == "All"))// בדיקה האם תרגילים כלול בסינון הנוכחי
        {
            if (generator.id == 6){//בדיקה האם זו היחידה השישית על מנת להוסיף כותרת
                unitsList.innerHTML += `
                <h2>תרגילים ידועים</h2>
                `
                }
            //הצגת סרטון שבלחיצה עליו ייפתח פופ אפ(מודל), כותרת ומידע    
        unitsList.innerHTML += `
        <div class="${generator.catagory} oneUnit">
    <button class="btnWithImg" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal${generator.id}">
  <img src="${generator.images[1]}" alt="${generator.title}">
    </button>

    <div class="modal fade" id="exampleModal${generator.id}" tabindex="-1" aria-labelledby="exampleModal${generator.id}Label" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title" id="exampleModal${generator.id}Label">${generator.title}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <video width="320" height="240" controls autoplay muted>
        <source src="${generator.images[0]}" type="video/mp4">
      </video>
        </div>
      </div>
    </div>
  </div>

        <h3>${generator.title}</h3>
        <p>${generator.info}</p>
        </div>
        `   
        }

    
    });

    // הוספת התוכן לאלמנט בדף
    itemsContainer.appendChild(unitsList);
}
//תפריט המבורגר שמופיע בגודל מסך מובייל ונעלם בגודל מסך מחשב
function toggleNav(){
    document.getElementById("main-nav").classList.toggle("hide-mobile");
}
