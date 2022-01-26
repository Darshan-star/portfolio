(function () {
  const projects = [
    {
      title: 'Dream Trip',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuzbYz9K1HMlOdmPHeq_qYXN7TnGpErfqffA&usqp=CAU',
      imageAlt: 'Dream Trip Cover Photo',
      description: 'Well, this is my new project on that currently I am working. As the name Suggest that this is a travelling website. Here you find many best tourist places in India. In addition this website give a hotels booking facility according to your travelling plane.',
      badgeCaption: 'Web',
      links: {
        github: 'https://github.com/Darshan-star',
        heroku: 'https://darshan-star.github.io/portfolio/#home',
        medium: 'https://dream-trips.000webhostapp.com/' 
      },
      accomplishments: [
        'Exploit-DB Juicy Informations',
        'Google Dork to Check sensitive leaks',
        'Modified the Google Dorks',
        'Got the NASA Website with leakage',
        'Directory Listing Vulnerability',
        'Vulnerability Reported and Acknowledged',
      ] 
    },
    {
      title: 'Renewed Store',
      image: 'https://darshan-star.github.io/my-portfolio/Renewed%20Store.jpg',
      imageAlt: 'Renewed Store Web',
      description: 'This is a online shopping Website like amazon and flip cart. Well, Till now I can made the front end of this website and now I am working on the backend part. But now I join this website with amazon.',
      badgeCaption: 'Web',
      links: {
        github: 'https://github.com/Darshan-star',
        heroku: 'https://darshan-star.github.io/portfolio/#home',
        medium: 'https://darshan-star.github.io/Renewed-Store/'
      },
      accomplishments: [
        'Indigo Dottie Chat Box Vulnerability',
        'Successfully able to inject HTML payloads',
        'Stored Based HTML Injection Attack',
        'Vulnerability Reported and Acknowledged'
      ] 
    },
    {
      title: 'Introvert Travels',
      image: 'https://darshan-star.github.io/my-portfolio/Introvert%20Travellers.jpg',
      imageAlt: 'Introvert Travels Web',
      description: 'Well, Introvert Travels is also a travelling based website. But, basecly this is for uploading your traveling images or the beauty of the world. So that everyone can enjoy your trips',
      badgeCaption: 'Web',
      links: {
        github: 'https://github.com/Darshan-star',
        heroku: 'https://darshan-star.github.io/portfolio/#home',
        medium: 'https://darshan-star.github.io/Introvert-travels/index.html',
              },
    accomplishments: [
        'Business Logic Error Vulnerability',
        'Vulnerability Finding in only 5 Minutes',
        'Parameter Tempering',
        'Adding $10000 only by Rs. 250',
        'Bug Reported',
        'Bounty Rewarded $100'
      ]  
    },
    {
      title: 'E-Hospital Center',
      image: './img/projects/E-hospital.jpg',
      imageAlt: 'E-Hospital Web',
      description: 'As the name suggest (E-Hospital Center) this is a hospital website. Here any user or patient can register in you smart phone or laptop and can get the information about different diseases or also they can book their appointment with expert doctors.',
      badgeCaption: 'Web',
      links: {
        github: 'https://github.com/Darshan-star',
        heroku: 'https://darshan-star.github.io/portfolio/#home',
        medium: 'https://darshan-star.github.io/e-hospital-center/',
              },
     accomplishments: [
        'Application Level Attack',
        'Attempted Using Burpsuite',
        'Address Parameter',
        'Bug Reported',
        'Bounty Rewarded Rs.250'
      ] 
    },
    {
      title: '3D Car Drive',
      image: './img/projects/car.jpg',
      imageAlt: '3D Car Game',
      description: 'Well, This is a simple 3D car game. You can simply play this game only rotating your smart phone or using left right key of computer or laptop.',
      badgeCaption: 'Game',
      links: {
        github: 'https://github.com/Darshan-star',
        heroku: 'https://darshan-star.github.io/portfolio/#home',
        medium: 'https://darshan-star.github.io/3D-Car-Drive/',
      },
    accomplishments: [
        'IoT Vulnerability',
        'Shodan.io Dorkings',
        'Camera Memory Dumped',
        'Shutdown the Camera Remotely',
        'Vulnerability Reported & Received Thanks',
      ] 
    },
     {
      title: 'Smart Agriculture System',
      image: 'https://static.wixstatic.com/media/ff99a2_9b6d904e4c5d42f3be66b9d65116299d~mv2.jpg/v1/fill/w_592,h_331,al_c,q_80,usm_0.66_1.00_0.01/Screenshot%202021-08-02%20133716.webp',
      imageAlt: 'IOT based Project',
      description: 'Well, This is IOT(Internet of Things) based project. Using this project I can solve many problems of farmer like harvesting problem, temperature problem etc. The only solution to these problem is smart agriculture by modernizing the current traditional methods of agriculture. Hence the project aims at making agriculture smart using automation and IoT technologies. The highlighting features of this project includes smart GPS based remote controlled robot to perform tasks like weeding, spraying, moisture sensing, bird and animal scaring, keeping vigilance, etc.',
      badgeCaption: 'IOT',
      links: {
        github: 'https://github.com/Darshan-star',
        heroku: 'https://darshan-star.github.io/portfolio/#home',
        medium: 'https://89c66133-3140-4e50-be09-333421a45dc4.filesusr.com/ugd/ff99a2_583b1eead03f4aa2a04e124636373ae1.docx?dn=Article.docx',
              },
     accomplishments: [
        'Use of smart IOT things',
        'Learn the use of Arduino',
        'arduino codes',
        'Properties of Sensors',
        'Remort controling'
      ] 
    }
  ]

  const blogPosts = [
    {
      name: 'CEHv11',
      link: 'https://aspen.eccouncil.org/Verify',
      image: './img/about-me/about-me-1.jpeg'
    },
    {
      name: 'VAPT',
      link: 'https://cyberops.in',
      image:'./img/about-me/about-me-2.jpg"'
    },
    {
      name: 'Cyber Security Trainer',
      link: 'https://cyberops.in',
      image: './img/about-me/about-me-3.jpg'
    },
    {
      name: 'Gamer',
      link: '',
      image: './img/about-me/about-me-4.jpg'
    }
  ]

  const nav = document.querySelector('nav')
  const navHeight = nav.offsetHeight
  const skillOffsetHeight = document.getElementById('skill').offsetTop
  const projectOffsetHeight = document.getElementById('project').offsetTop
  const actionBtn = document.querySelector('.fixed-action-btn a:first-of-type')
  let skillsAnimated = false
  let aboutCardPlaced = false
  let projectPlaced = false
  let learnMoreAnimated = false

  // Handle animation end
  function handleAnimationEnd(element, animations) {
    element.classList.remove(...animations)
  }

  // Handle navbar animation
  function animateNav() {
    if (window.pageYOffset > navHeight) { return nav.classList.add('blue-grey', 'lighten-3', 'shadow') }
    nav.classList.remove('blue-grey', 'lighten-3', 'shadow')
  }

  // Handle floating action button
  function showFloatingActionButton() {
    if (window.pageYOffset > navHeight) { return actionBtn.classList.remove('scale-out') }
    actionBtn.classList.add('scale-out')
  }

  // Handle about cards animation
  function animateAboutCards() {
    if (window.pageYOffset <= navHeight) { return }
    // switch status to placed
    aboutCardPlaced = true
    // get about section
    const aboutSection = document.querySelector('.section-about .row')
    // generate html for each blog post
    blogPosts.forEach(post => {
      // place post
      aboutSection.innerHTML += `
        <div class="col s12 m6 xl3">
          <div class="card animated jackInTheBox slow">
            <a href="${post.link}" target="_blank">
              <div class="card-image" style="background-image: url(${post.image});">
                <div class="overlay"></div>
                <span class="card-title">
                  ${post.name}
                </span>
              </div>
            </a>
          </div>
        </div>
      `
    })
  }

  // Handle skill section animation
  function animateSkills() {
    if (window.pageYOffset + window.innerHeight <= skillOffsetHeight) { return }
    const firstSkillSection = document.getElementById('front-end-carousel-item')
    const animations = ['animated', 'slideInRight']
    skillsAnimated = true
    firstSkillSection.classList.add(...animations)
    firstSkillSection.addEventListener('animationend', () => handleAnimationEnd(event.target, animations))
  }

  // Handle learn more section animation
  function animateLearnMore() {
    const learnMoreOffsetHeight = document.getElementById('more-info').offsetTop
    if (window.pageYOffset + window.innerHeight <= learnMoreOffsetHeight) { return }
    const buttons = document.querySelectorAll('.learn-more-link a')
    const animations = ['animated', 'bounceIn', 'slow']
    learnMoreAnimated = true
    buttons.forEach(button => button.classList.add(...animations))
  }

  // Generate icons of link
  function getIconLinks(links) {
    let icons = ``
    if (links.github) {
      icons += `<a href=${links.github} class="right btn-floating btn-small waves-effect waves-light teal" target="_blank"><i class="fab fa-github"></i></a>`
    }
    if (links.medium) {
      icons += `<a href=${links.medium} class="right btn-floating btn-small waves-effect waves-light teal" target="_blank"><i
                  class="fab fa-medium-m"></i></a>`
    }
    if (links.chrome) {
      icons += `<a href=${links.chrome}
                class="right btn-floating btn-small waves-effect waves-light teal" target="_blank"><i class="fab fa-chrome"></i></a>`
    }
    if (links.heroku) {
      icons += `<a href=${links.heroku}
                class="right btn-floating btn-small waves-effect waves-light teal" target="_blank"><i class="fas fa-home"></i></a>`
    }
    return icons
  }

  function getAccomplishments(accomplishments) {
    return accomplishments.map(point => `<li><i class="fas fa-caret-right"></i>${point}</li>`).join('')
  }

  // Place all projects into project section
  function placeProjects() {
    // place projects when scroll to project section
    if (window.pageYOffset + window.innerHeight <= projectOffsetHeight) { return }
    // get elements
    const projectSection = document.querySelector('.section-project .row')
    // switch status to placed
    projectPlaced = true
    // generate html for each project
    projects.forEach(project => {
      // Get all icon links
      const icons = getIconLinks(project.links)
      // Gather all accomplishments
      const accomplishments = getAccomplishments(project.accomplishments)

      projectSection.innerHTML += `
        <div class="col s12 m6 animated flipInX">
          <div class="card sticky-action hoverable">
            <div class="card-image waves-effect waves-block waves-light">
              <img class="responsive-img activator" src=${project.image}
                alt="${project.image} Project Cover Photo">
              <div class="overlay"></div>
              <span class="card-title activator">${project.title}</span>
            </div>
            <div class="card-action">
              <p class="activator truncate"><span class="new badge right activator"
                data-badge-caption="${project.badgeCaption}"></span>${project.title}</p>
            </div>
            <div class="card-reveal">
              <div class="overlay"></div>
              <span class="card-title white-text">Accomplishments<i class="material-icons right">close</i></span>
              <ul class="white-text">
                ${accomplishments}
              </ul>
              <div id="card-reveal-icons">
                ${icons}
              </div>
            </div>
          </div>
        </div>
        <div class="col m5 hide-on-med-and-down offset-m1 valign-wrapper">
          <h5 class="blue-grey-text text-darken-1">${project.title}</h5>
          <span class="blue-grey-text text-lighten-1">${project.description}</span>
        </div>
      `
    })
  }

  window.addEventListener('scroll', () => {
    animateNav()
    showFloatingActionButton()
    if (!aboutCardPlaced) { animateAboutCards() }
    if (!skillsAnimated) { animateSkills() }
    if (!projectPlaced) { placeProjects() }
    if (!learnMoreAnimated && projectPlaced) { animateLearnMore() }
  })
})()
