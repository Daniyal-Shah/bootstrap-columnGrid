//It is just to duplicate card and insert dynamically into parent container
const members=document.getElementById("members");
const memberCard=`            <div class="member-card d-flex justify-content-center px-3 col-sm-12 col-md-4 col-lg-3 " >
<div class="course-thumbnail d-flex flex-column justify-content-center ">
  <!-- image -->
    <div class="image-wrapper my-4 ">
      <a href="/faculty/details/INS-0201">
          <img class="member-image animate__animated animate__zoomIn d-block" src="https://facultyimages.iba-suk.edu.pk/INS-0201.jpg" style="width: 10rem; height: 10rem; border-radius: 4%;">
      </a>
    </div>
    <!-- description -->
    <div class="description">
        <a href="#" ><h4 class="member-name">Muhammad Irshad Nazeer</h4></a>
        <a href="#"> <h5 class="course-category">Assistant Professor</h5></a>
        
        <div class="description-divider"></div>

        <div class="course-meta">
            <span class="course-date" style="font-size:7.5pt; color: darkgray;"><i class="fas fa-envelope mr-1"></i>irshad.nazeer@iba-suk.edu.pk</span>
        </div>
        <button class="btn btn-view-member"><a class="btn" href="/faculty/details/ADM-0089"  style="font-size:10pt; width: 100%;  border: 5px solid #C5C5C5; "><b>View Details</b> </a></button>
    </div>
</div>
</div>`;

for (let index = 0; index < 7; index++) 
{
    members.insertAdjacentHTML("beforeend", memberCard);    
}


