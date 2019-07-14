import  React from 'React';



const jobListingForm = () => {
    return(
        <div>
            <form>
                <labe>Job Title</labe>
                <input type="text"
                value = {jobTitle}
                />

                <label htmlFor="">Description</label>
                <input type="text"
                value  = {description}
                />

                <label htmlFor="">Desired Skills</label>
                <input type="text"
                value = {skills}
                />

                <label htmlFor="">Approx Salary</label>
                <input type="text"
                value = {salary}
                />
            </form>
        </div>
    )
}




export default jobListingForm;