import mainCss from './css/index.css'
import logoThrive from './img/thrive-logo.svg'

const footerContent =
`
<div class="row">
    <div class="col-md-16">
        <a href="https://thrivedatascience.com/" class="footer-logo-thrive" target="_blank" title="Thrive Data Science">${logoThrive}</a>
    </div>
    <div class="col-md-16">
        <a href="https://jenkins.thrivedatascience.com/" class="jenkins-lnk" target="_blank" title="Jenkins">Jenkins</a>
        <a href="mailto:support@thrivedatascience.com" class="jenkins-lnk" title="support@thrivedatascience.com">support@thrivedatascience.com</a>
    </div>
</div>
`

function footerLogo() {
    document.querySelector('body>footer .container-fluid .row').insertAdjacentHTML('beforebegin', footerContent)
}
function logoHeader() {
    var elem = document.querySelector('#header .logo > a');
    elem.setAttribute('href', 'https://jenkins.thrivedatascience.com/')
    elem.classList.add('header-jenkins-logo')
}

document.addEventListener('DOMContentLoaded', () => {
    footerLogo();
    logoHeader();
})