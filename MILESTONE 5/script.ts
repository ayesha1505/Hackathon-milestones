// Listing Elements

document.getElementById('resumeform')?.addEventListener('submit' , function(event){
    event.preventDefault();

    //type assertion

    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const skillElement = document.getElementById('skills') as HTMLInputElement;


    if(nameElement && emailElement && phoneElement && educationElement && experienceElement && skillElement){

        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillElement.value;



    //Create resume Output

    const resumeOutput = `
    <h2>Editable Resume</h2>
    <p><strong>Name: </strong> <span contenteditable="true">${name}</span></p>
    <p><strong>Email: </strong><span contenteditable="true"> ${email}</span></p>
    <p><strong>Phone: </strong><span contenteditable="true"> ${phone}</span></p>
    
    <h3>Education</h3>
    <p contenteditable="true">${education}</p>

    <h3>Experience</h3>
    <p contenteditable="true">${experience}</p>

    <h3>Skills</h3>
    <p contenteditable="true">${skills}</p>
    `

    const resumeOutputElement = document.getElementById('resumeOutput');

    if(resumeOutputElement){
        resumeOutputElement.innerHTML = resumeOutput
    } else {
        console.error('The resume output elements are missing')
    }

    }else {
        console.error('one or more resume output elements are missing')
    }
})

const shareableLink = document.getElementById("shareable-link") as HTMLAnchorElement
shareableLink?.addEventListener("click" , ()=>{

})

const downloadPdf = document.getElementById("downloadpdf") as HTMLButtonElement
downloadPdf?.addEventListener("click" , ()=>{
    window.print()
})