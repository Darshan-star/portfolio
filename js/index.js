(function () {
  const projects = [
    {
      title: 'Dream Trip',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuzbYz9K1HMlOdmPHeq_qYXN7TnGpErfqffA&usqp=CAU',
      imageAlt: 'Dream Trip Cover Photo',
      description: 'Uage of Exploit-DB and some modifications of Google Dorks lead to me the website of NASA where the Sensitive Data is leaking with issue of Directory Listing',
      badgeCaption: 'Web',
      links: {
        github: 'https://github.com/Darshan-star',
        heroku: 'https://localhost/shouvik-dutta/#/',
        medium: 'https://mrhacker07.wordpress.com' 
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
      title: 'Indigo Airlines',
      image: './img/projects/Indigo.jpeg',
      imageAlt: 'Indigo Airlines',
      description: 'Stored Based HTML Injection Attack over the Indigo Chat box, While chatting to any Indigo support team member injecting HTML payloads and successfully executed',
      badgeCaption: 'HTML Injection',
      links: {
        github: 'https://github.com/shouvikdutta1998',
        heroku: 'https://localhost/shouvik-dutta/#/',
        medium: 'https://mrhacker07.wordpress.com'
      },
      accomplishments: [
        'Indigo Dottie Chat Box Vulnerability',
        'Successfully able to inject HTML payloads',
        'Stored Based HTML Injection Attack',
        'Vulnerability Reported and Acknowledged'
      ]
    },
    {
      title: 'Central Bancompany',
      image: './img/projects/central.png',
      imageAlt: 'Central Bankcompany',
      description: 'A Business Logic error Vulnerability, Adding $10000 from real account by just paying Rs.250, Tempered the value parameter lead to critical Vulnerability',
      badgeCaption: 'Business Logic Bug',
      links: {
        github: 'https://github.com/shouvikdutta1998',
        heroku: 'https://localhost/shouvik-dutta/#/',
        medium: 'https://mrhacker07.wordpress.com',
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
      title: 'Red Wolf',
      image: './img/projects/redwolf.png',
      imageAlt: 'redwolf',
      description: 'Application Level DDOS Attack in the user registration page over Address Parameter lead to slow down of the website',
      badgeCaption: 'Application Level DDOS',
      links: {
        github: 'https://github.com/shouvikdutta1998',
        heroku: 'https://localhost/shouvik-dutta/#/',
        medium: 'https://mrhacker07.wordpress.com',
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
      title: 'Cox Communications',
      image: './img/projects/cox.png',
      imageAlt: 'Cox Communications Logo',
      description: 'IoT Bug found by using shodan.io search engine, which take me to telnet service and dumped the memory of Cox Communications Two of IoT camera listed over the Internet',
      badgeCaption: 'IoT Bug',
      links: {
        github: 'https://github.com/shouvikdutta1998',
        heroku: 'https://localhost/shouvik-dutta/#/',
        medium: 'https://mrhacker07.wordpress.com',
      },
      accomplishments: [
        'IoT Vulnerability',
        'Shodan.io Dorkings',
        'Camera Memory Dumped',
        'Shutdown the Camera Remotely',
        'Vulnerability Reported & Received Thanks',
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
