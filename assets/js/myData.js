const MYPROJECTS = [
    {
        name:'ICONN SYSTEM',
        description: 'I connect system that connect the designer from Ichijo USA and HRD staff through multiple system inside this system',
        image:'./assets/images/iconn/home.png',
    },
    {
        name:'Activity Plan Sheet',
        description: 'Iconn system sub system that tract and display the task progress and status',
        image:'./assets/images/iconn/activity_plan_sheet.png'
    },
    {
        name:'Admin Setting',
        description: 'Iconn system sub system that set the user type access setting in different pages',
        image:'./assets/images/iconn/admin_setting.png'
    },
    {
        name:'Base Plan Search',
        description: 'Iconn system sub system that display the available plan that has the specific specification',
        image:'./assets/images/iconn/base_plan_search.png'
    },
    {
        name:'Cad Plan Monitoring',
        description: 'Iconn system sub system that monitor the cad plan and other requirements for that plan',
        image:'./assets/images/iconn/cad_plan_monitoring.png'
    },
    {
        name:'Cad Request',
        description: 'Iconn system sub system that set and display the necessary plan for a project plan',
        image:'./assets/images/iconn/cad_request.png'
    },
    {
        name:'Color Scheme',
        description: 'Iconn system sub system that create a new color scheme and set the color image a part of house',
        image:'./assets/images/iconn/color_scheme.png'
    },
    {
        name:'ICONN Drive',
        description: 'Iconn system sub system that derive from google drive function',
        image:'./assets/images/iconn/iconn_drive.png'
    },
    {
        name:'Master Setting',
        description: 'Iconn system sub system that has a CRUD function for the user of Iconn system',
        image:'./assets/images/iconn/master_setting.png'
    },
    {
        name:'Production Document',
        description: 'Iconn system sub system that function as an uploader and segragate the files according to the project plan and plan type and file type',
        image:'./assets/images/iconn/production_document.png'
    },
    {
        name:'Project List',
        description: 'Iconn system sub system that has CRUD function for the management of a plan per project',
        image:'./assets/images/iconn/project_list.png'
    },
    {
        name:'Shipping Schedule',
        description: 'Iconn system sub system that display the upcoming shipping schedule and create new schedule even if there is no plan yet',
        image:'./assets/images/iconn/shipping_schedule.png'
    },
    {
        name:'Spec Sheet',
        description: 'Iconn system sub system that create a new specification sheet for a plan or copy other specification sheet of a plan then modify it',
        image:'./assets/images/iconn/spec_sheet.png'
    },
    {
        name:'Stop Check Monitoring',
        description: 'Iconn system sub system that monitor the plans that has Stop check',
        image:'./assets/images/iconn/stop_check_monitoring.png'
    },
    {
        name:'System Request',
        description: 'Iconn system sub system that monitor the progress of all the system inside the system and can also check the current sub task of that system development',
        image:'./assets/images/iconn/system_request.png'
    },
    {
        name:'System Task Monitoring',
        description: 'Iconn system sub system that monitor the system task of the developer and current status of that system',
        image:'./assets/images/iconn/system_task_monitoring.png'
    },
    // 
    {
        name:'CRM AAI Dashboard Calendar',
        description: 'CRM AAI dashboard calendar display and monitor the Sales Officer meeting and status',
        image:'./assets/images/crm/DashboardCalendar.png'
    },
    {
        name:'CRM AAI Dashboard Table',
        description: 'CRM AAI dashboard calendar display and monitor the Sales Officer meeting and status',
        image:'./assets/images/crm/DashboardTable.png'
    },
    {
        name:'CRM AAI For Proposal',
        description: 'CRM AAI list of proposal contract that need to be done and assign.',
        image:'./assets/images/crm/ForProposal.png'
    },
    {
        name:'CRM AAI Maintenance Services',
        description: 'CRM AAI list of services offer and available sub services.',
        image:'./assets/images/crm/MaintenanceServices.png'
    },
    {
        name:'CRM AAI Role Permission',
        description: 'CRM AAI list of user type and their role and permision.',
        image:'./assets/images/crm/RolePermission.png'
    },
    {
        name:'CRM AAI Role',
        description: 'CRM AAI list of user role and system access',
        image:'./assets/images/crm/Roles.png'
    },
    {
        name:'CRM AAI User',
        description: 'CRM AAI list of user and thier detail and thier handle warehouse/staff/customer',
        image:'./assets/images/crm/UserDetails.png'
    },
    {
        name:'CRM AAI User',
        description: 'CRM AAI list of user and thier detail and thier handle warehouse/staff/customer',
        image:'./assets/images/crm/UserDetails2.png'
    },
    {
        name:'CRM AAI User',
        description: 'CRM AAI list of user and thier detail and thier handle warehouse/staff/customer',
        image:'./assets/images/crm/UserTable.png'
    },
    {
        name:'EvolGame Game Area',
        description: 'EvolGame is a platform for playing bacarrat and have chatting system, point system, chatting system',
        image:'./assets/images/evolgame/game_area.png'
    },
    {
        name:'EvolGame General Chat',
        description: 'EvolGame General Chat allow players to send message and the admin can also put announcement.',
        image:'./assets/images/evolgame/general_chat.png'
    },
    {
        name:'EvolGame 1 on 1 Chat',
        description: 'EvolGame 1 on 1 chat allow players to send private message to the player with 12 hours limit from the moment the invitation is accepted',
        image:'./assets/images/evolgame/1v1_chat.png'
    },
    {
        name:'EvolGame Group Chat',
        description: 'Evol Game Group Chat allow the owner of group chat to show the bet history and message the viewers of his group chat. The viewers can also interact with the owner by replying to his group chat. The owner can also see how many viewer or who are the viewer on his group chat',
        image:'./assets/images/evolgame/group_chat.png'
    },
    {
        name:'EvolGame BO Attendance Reward Setting',
        description: 'Evol Game Back Office Attendance Setting can set the award system for the EvolGame',
        image:'./assets/images/evolgame_bo/attendance_reward_setting.png'
    },
    {
        name:'EvolGame BO Level Manament',
        description: 'Evol Game Back Office Level Management can manage the leveling mechanics of EvolGame',
        image:'./assets/images/evolgame_bo/level_management.png'
    },
    {
        name:'EvolGame BO Log Activity',
        description: 'Evol Game Back Office Log Activity can monitor the event or activity of all the player using the EvolGame',
        image:'./assets/images/evolgame_bo/log_activity.png'
    },
    {
        name:'EvolGame BO User Management',
        description: 'Evol Game Back Office User Management can manage all the player or user of EvolGame',
        image:'./assets/images/evolgame_bo/user_management.png'
    },
    {
        name:'EvolGame BO Web Access Statistic',
        description: 'Evol Game Back Office Web Access Statistic can monitor the page visited by user or guest and display the frequency to Bar chart',
        image:'./assets/images/evolgame_bo/web_access_statistic.png'
    },
];

const SKILL = [
  { "id": 1,    "name": "HTML5",            "icon": "./assets/images/html-5.png" },
  { "id": 2,    "name": "CSS3",             "icon": "./assets/images/css-3.png" },
  { "id": 3,    "name": "JavaScript",       "icon": "./assets/images/js.png" },
  { "id": 4,    "name": "Bootstrap",        "icon": "./assets/images/bootstrap.png" },
  { "id": 5,    "name": "Vue",              "icon": "./assets/images/vue.png" },
  { "id": 6,    "name": "Vuetify",          "icon": "./assets/images/vuetify.png" },
  { "id": 7,    "name": "Ant Design",       "icon": "./assets/images/antdesign.png" },
  { "id": 8,    "name": "PHP",              "icon": "./assets/images/php.png" },
  { "id": 9,    "name": "Laravel",          "icon": "./assets/images/laravel.png" },
  { "id": 10,   "name": "XAMPP",            "icon": "./assets/images/xampp.png" },
  { "id": 11,   "name": "MySQL",            "icon": "./assets/images/mysql.png" },
  { "id": 12,   "name": "SQL Server",       "icon": "./assets/images/sqlserver.png" },
  { "id": 13,   "name": "MS Access",        "icon": "./assets/images/access.png" },
  { "id": 14,   "name": "VisualBasic",      "icon": "./assets/images/vb.png" },
  { "id": 15,   "name": "Git",              "icon": "./assets/images/git.png" },
  { "id": 16,   "name": "GitHub",           "icon": "./assets/images/github.png" },
  { "id": 17,   "name": "GitLab",           "icon": "./assets/images/gitlab.png" },
  { "id": 18,   "name": "SourceTree",       "icon": "./assets/images/sourcetree.png" },
  { "id": 19,   "name": "Bootstrap Vue",    "icon": "./assets/images/bootstrapvue.png"},
  { "id": 20,   "name": "JQuery",           "icon": "./assets/images/jquery.png" },
  { "id": 21,   "name": "Python",           "icon": "./assets/images/python.png" }
]


const JOB = [
    {
        id:1,
        company:'H.R.D Singapore Pte., Ltd.',
        position:'Programmer',
        timeline:'January 2021 - December 2023',
        description:'',
        tech_use:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,17,18],
        responsibilities:[
            "Design, develop, and maintain web applications and native apps for company operations.",
            "Build internal systems supporting multiple international branches.",
            "Develop dynamic, responsive, and user-friendly interfaces using Vue.js and Vuetify.",
            "Implement robust backend solutions and RESTful APIs using Laravel.",
            "Ensure performance optimization, scalability, and maintainability across systems.",
            "Collaborate with cross-regional teams to align business requirements with technical solutions.",
            "Create Api using Java springboot that used by other system.",
        ]
    },
    {
        id:2,
        company:'Octal Philippines Inc.',
        position:'PHP Developer',
        timeline:'March 2024 - March 2025',
        description:'',
        tech_use:[1,2,3,4,5,8,9,10,11,12,15,16,19,],
        responsibilities:[
            "Develop new pages and modular components for the CRM system.",
            "Implement interactive data tables and dashboards using AG Grid.",
            "Build responsive and modern UIs with Vue.js, BootstrapVue, and Velzon.",
            "Integrate Laravel-based APIs with Vue components for dynamic data handling.",
            "Optimize the application for performance, scalability, and maintainability.",
            "Collaborate with the team to plan, design, and deliver new features.",
        ]
    },
    {
        id:3,
        company:'8Bacus Inc.',
        position:'Backend Developer',
        timeline:'June 2025 - Feb 2026',
        description:'',
        tech_use:[1,2,3,4,8,9,10,11,12,15,16,20,21],
        responsibilities:[
            "Develop and maintain web pages and components using Laravel Blade, vanilla JS, jQuery, and Alpine.js.Implement responsive and user-friendly UI designs.",
            "Build and integrate APIs for dynamic data handling.",
            "Optimize application performance and improve overall user experience.",
            "Collaborate with other developers to ensure smooth project delivery.",
            "Troubleshoot, debug, and enhance existing features.",
            "Develop real-time chat and notification systems with Chatify, Pusher, and Laravel Echo.",
        ]
    },
];



document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById("projectsContainer");

    MYPROJECTS.forEach(project => {
        const card = document.createElement("div");
        card.className = "main-project flip-card";

        card.innerHTML = `
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <div class="bar">
                    <div class="info">
                        <span>${project.name}</span>
                        <p>${project.description}</p>
                    </div>
                    </div>
                </div>
                <div class="flip-card-back">
                    <img 
                    src="${project.image}" 
                    alt="${project.name}" 
                    class="project-image"
                    data-image="${project.image}"
                    />
                </div>
            </div>
        `;
        console.log('wow')
        container.appendChild(card);
    });
    modal_flip();
    showSkills();
    showTimeline();
    tooltip();
});

function modal_flip(){
     // Get the modal elements
    var modal = document.getElementById("imageModal");
    var modalImage = document.getElementById("modalImage");
    var captionText = document.getElementById("caption");
    var closeButton = document.getElementsByClassName("close-button")[0];

    // Get all project images
    var projectImages = document.querySelectorAll('.project-image');

    // Loop through all images and add click event listeners
    projectImages.forEach(function(img) {
        img.addEventListener('click', function() {
            modal.style.display = "block"; // Show the modal
            modalImage.src = this.getAttribute('data-image'); // Set modal image source
            captionText.innerHTML = this.alt; // Set modal caption from image alt text
        });
    });

    // When the user clicks on <span> (x), close the modal
    closeButton.addEventListener('click', function() {
        modal.style.display = "none";
    });

    // When the user clicks anywhere outside of the image, close the modal
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });

    // Optional: Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape" || event.key === "Esc") {
            if (modal.style.display === "block") {
                modal.style.display = "none";
            }
        }
    });
}


function showSkills() {
    let skillsContainer = document.getElementById("skillsContainer");
    let skillHTML = "";
    SKILL.forEach(skill => {
        skillHTML += `
            <div class="bar">
                <div class="info">
                    <img src=${skill.icon} alt="skill" />
                    <span>${skill.name}</span>
                </div>
            </div>`
    });
    skillsContainer.innerHTML = skillHTML;
}

function showTimeline(){
    let timelineContainer = document.getElementById("timelineContainer");
    let timelineHTML = "";
    JOB.reverse().forEach(job => {
        let responsibilities = "";
        let tech_stack = "";
        job.responsibilities.forEach(responsibility => {
            responsibilities += `<li class="ml-4">${responsibility}</li>`
        })
        job.tech_use.forEach(tech_use => {
            let tech = {}
            SKILL.filter(skill=>{
                if(skill.id === tech_use){
                    tech = skill
                }
            })
            tech_stack += `<div 
                class="tech_stack mr-1" 
                style="background-image:url(${tech.icon})" 
                data-tooltip="${tech.name}"
            ></div>`
        })
        timelineHTML += `
            <div class="container ${job.id%2 ? 'right' : 'left'}">
                <div class="content">
                    <div class="tag">
                        <h2>${job.company}</h2>
                    </div>
                    <div class="desc">
                        <h3>${job.position}</h3>
                        <p>${job.timeline}</p>
                        <div>
                            <h3>Responsibilities</h3>
                            ${responsibilities}
                        </div>
                        <div>
                            <h3>Tech Stact</h3>
                            ${tech_stack}
                        </div>
                    </div>
                </div>
            </div>
        `
    });
    timelineContainer.innerHTML = timelineHTML;
}

function tooltip() {
    document.querySelectorAll('[data-tooltip]').forEach(el => {
        let tooltip;

        el.addEventListener('mouseenter', () => {
        tooltip = document.createElement('div');
        tooltip.className = 'tooltip-box';
        tooltip.textContent = el.dataset.tooltip;
        document.body.appendChild(tooltip);

        const rect = el.getBoundingClientRect();
        tooltip.style.top =
            rect.top + window.scrollY - tooltip.offsetHeight - 8 + 'px';
        tooltip.style.left =
            rect.left + window.scrollX + (rect.width - tooltip.offsetWidth) / 2 + 'px';

        requestAnimationFrame(() => tooltip.classList.add('show'));
        });

        el.addEventListener('mouseleave', () => {
            if (tooltip) {
                tooltip.remove();
                tooltip = null;
            }
        });
    });
}