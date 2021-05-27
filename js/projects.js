// handle mockups' slider
const mockupsFirstProject = document.querySelector('.big-project__image-container.mockups-1');
const mockupsSecondProject = document.querySelector('.big-project__image-container.mockups-2');
const mockupsThirdProject = document.querySelector('.big-project__image-container.mockups-3');
const imageFirstProject = document.querySelector('.big-project__photo-1');
const imageSecondProject = document.querySelector('.big-project__photo-2');
const imageThirdProject = document.querySelector('.big-project__photo-3');

const time = 4000;
let active = 0;
const mockups_FirstProject = ["../images/img-projects/mockup-travelsWorld_1.png", "../images/img-projects/mockup-travelsWorld_2.png", "../images/img-projects/mockup-travelsWorld_3.png"];

const mockups_SecondProject = ["../images/img-projects/mockup-worldOfAstrophysics_1.png", "../images/img-projects/mockup-worldOfAstrophysics_2.png", "../images/img-projects/mockup-worldOfAstrophysics_3.png"];

const mockups_ThirdProject = ["../images/img-projects/mockup-positiveVentures_1.png", "../images/img-projects/mockup-positiveVentures_2.png", "../images/img-projects/mockup-positiveVentures_3.png"];

const changeSlide = () => {
  active++;
  if (active === mockups_FirstProject.length || active === mockups_SecondProject.length || active === mockups_ThirdProject.length) {
   active = 0;
  }
  imageFirstProject.src = mockups_FirstProject[active];
  imageSecondProject.src = mockups_SecondProject[active];
  imageThirdProject.src = mockups_ThirdProject[active];
 }
 setInterval(changeSlide, time);