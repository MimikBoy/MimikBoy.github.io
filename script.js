const navbar = `<svg xmlns="http://www.w3.org/2000/svg" class="d-none">
<symbol id="brightness-high-fill" fill="currentColor" viewBox="0 0 16 16">
    <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
</symbol>
<symbol id="check-lg"fill="currentColor" viewBox="0 0 16 16">
    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
</symbol>
<symbol id="circle-half" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8 15A7 7 0 1 0 8 1zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16"/>
</symbol>
<symbol id="moon-stars-fill" fill="currentColor" viewBox="0 0 16 16">
    <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>
    <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
</symbol>
</svg>
<nav class="navbar navbar-expand-lg bg-body-tertiary" >
<div class="container-fluid">
  <a class="navbar-brand mb-0 h1">Exby</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link" id="indexPage" aria-current="page" href="index.html">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="drawingPage" aria-current="page" href="drawing.html">Drawing</a> 
      </li>
    </ul>
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
      <li class="nav-item dropdown">
        <button class="btn btn-link nav-link dropdown-toggle px-lg-2 align-items-center" type="button" id="bd-theme"
          data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-label="Toggle theme">
          <svg class="bi my-1 theme-icon-active" width="16" height="16"><use></use></svg>
          <span class="d-lg-none ms-2" id="bd-theme-text">Theme</span>
        </button>
        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="bd-theme-text">
          <li>
                <button type="button" class="dropdown-item d-flex align-items-center" href="#" data-bs-theme-value="light">
                    <svg class="bi me-2 opacity-75" width="16" height="16"><use href="#brightness-high-fill"></use></svg>
                    Light Mode
                </button>
          </li>
          <li>
                <button type="button" class="dropdown-item d-flex align-items-center" href="#" data-bs-theme-value="dark">
                    <svg class="bi me-2 opacity-75" width="16" height="16"><use href="#moon-stars-fill"></use></svg>
                    Dark Mode
                </button>
          </li>
          <li>
                <button type="button" class="dropdown-item d-flex align-items-center" href="#" data-bs-theme-value="auto">
                    <svg class="bi me-2 opacity-75" width="16" height="16"><use href="#circle-half"></use></svg>
                    Auto
                </button>
          </li>
          
        </ul>
      </li>
    </ul>
  </div>
</div>
</nav>`
const pages = ["index", "drawing", "/"];
var prevPage = "";
for (page of pages){
    if (window.location.pathname.includes(page)){
        const h2 = document.getElementById("replace_with_navbar");
        h2.insertAdjacentHTML("afterbegin", navbar);
        break;
    }
}   

theme();
activePage();

function theme(){
  (() => {
      'use strict'
    
      const getStoredTheme = () => localStorage.getItem('theme')
      const setStoredTheme = theme => localStorage.setItem('theme', theme)
    
      const getPreferredTheme = () => {
        const storedTheme = getStoredTheme()
        if (storedTheme) {
          return storedTheme
        }
    
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      }
    
      const setTheme = theme => {
        if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
          document.documentElement.setAttribute('data-bs-theme', 'dark')
        } else {
          document.documentElement.setAttribute('data-bs-theme', theme)
        }
      }

      setTheme(getPreferredTheme())
    
      const showActiveTheme = (theme, focus = false) => {
        const themeSwitcher = document.querySelector('#bd-theme')
    
        if (!themeSwitcher) {
          return
        }
    
        const themeSwitcherText = document.querySelector('#bd-theme-text')
        const activeThemeIcon = document.querySelector('.theme-icon-active use')
        const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`)
        const svgOfActiveBtn = btnToActive.querySelector('svg use').getAttribute('href')
        
        console.log(activeThemeIcon);

        document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
          element.classList.remove('active')
          element.setAttribute('aria-pressed', 'false')
        })
    
        btnToActive.classList.add('active')
        btnToActive.setAttribute('aria-pressed', 'true')
        activeThemeIcon.setAttribute('href', svgOfActiveBtn)
        const themeSwitcherLabel = `${themeSwitcherText.textContent} (${btnToActive.dataset.bsThemeValue})`
        themeSwitcher.setAttribute('aria-label', themeSwitcherLabel)
    
        if (focus) {
          themeSwitcher.focus()
        }
      }
    
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        const storedTheme = getStoredTheme()
        if (storedTheme !== 'light' && storedTheme !== 'dark') {
          setTheme(getPreferredTheme())
        }
      })
    

      const elements = document.querySelectorAll('[data-bs-theme-value]');
      if (elements.length > 0) {
          // Elements are present, execute your script
          document.querySelectorAll('[data-bs-theme-value]').forEach(toggle => {
              toggle.addEventListener('click', () => {
                  const theme = toggle.getAttribute('data-bs-theme-value')
                  setStoredTheme(theme)
                  setTheme(theme)
                  showActiveTheme(theme, true)
              })
          })
      }
       

      window.addEventListener('DOMContentLoaded', () => {
        showActiveTheme(getPreferredTheme())
      })
    })()
}

function activePage(){
  var element;
  for (page of pages){
    if (window.location.pathname.includes(page)){
      console.log(page+"Page");
      if (page === "/"){
        page = "index";
      }
      var element = document.getElementById(page+"Page");
      element.classList.toggle("active");
      break;
    }
  }
}