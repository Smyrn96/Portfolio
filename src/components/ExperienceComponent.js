import { Container } from "react-bootstrap";

const ExperienceComponent = () => {

    const jobDetails = {
        title:"Member of technical staff",
        company:"VMWARE",
        locationDate:"June 2021-Present Palo Alto CA",
        Team:"Platform"
    }
    const works = [jobDetails,jobDetails,jobDetails]

  return (
    <Container className="w-100 p-0 m-0" fluid>
      <div className="marginBig">
        <div className="h_00 textColor text-center mb-5">Experience</div>
        {works.map((work,index)=>{
            return (<div className="d-flex justify-content-center">
            <div className="me-5">
              <div className={index===0 ? "circle active" : "circle"}></div>
              <div className={index!=works.length-1 ?"vertical": "vertical last"}></div>
            </div>
            <div className="workGrid basicColor br10">{work.title}</div>
          </div>)
        })}
        
      </div>
    </Container>
  );
};

export default ExperienceComponent;
