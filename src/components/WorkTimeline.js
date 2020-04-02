import React, { useState } from "react";
import HorizontalTimeline from 'react-horizontal-timeline';
import {
  Card,
  CardBody,
  Row,
  Col,
} from "reactstrap";

const WorkTimeline = () => {
  const data = [
    {
      date: "02/05/2010",
      title: "Junior Developer at Percolait Inc.",
      description: "Fresh out of college, this is where I learn to code with Rails. I was first involve in building the frontend until I learn the rails magic."
    },
    {
      date: "07/05/2010",
      title: "Freelance Rails Developer: TigerBalm, Exvo",
      description: "In the 2nd quarter of the year, I worked with Bobby Santiago with clients like Tigerbalm the famous herbal product. \
        And in the later months I joined the Exvo team where we built some of the exvo cloud apps."
    },
    {
      date: "06/25/2011",
      title: "Freelance: Winjunkie & several projects",
      description: "Worked on several projects for Kent Fenwick: Winjunkie, ThiShipyards, CrookedCue, etc."
    },
    {
      date: "11/01/2011",
      title: "Cofounded Bootyard",
      description: "Cofounded Bootyard, a ruby on rails shop based in Cebu City Philippines with clients across different countries like \
        Tlkbck, Adakite, & Wizur. We also built Codetoki, an online learning platform for aspiring developers which won an award in StartupWeekend Cebu."
    },
    {
      date: "07/03/2012",
      title: "Freelance: Vizaroo, WsupNow, and other projects",
      description: "Worked with Matt Hurst who had this idea of an online visual teaching for his students. The app was Vizaroo, it displays a mind map of the questions and answers.\
        During this period I also worked with other clients like Stuart Leung where we built an Events App for catered for LGBTs."
    },
    {
      date: "05/05/2013",
      title: "Web Developer at Sourcepad Inc.",
      description: "Sourcedpad is a software development shop. I worked for them as a Ruby on Rails developer. Some of the projects that I've handled range from health industry, education, and social tech (e.g Umbiedentalcare, Dineoncampus, Sweigh, etc.)"
    },
    {
      date: "11/01/2015",
      title: "Freelance: Fuzzie",
      description: "Worked with Farhan for his Gifting App called Fuzzie. The backend API was built using Ruby on Rails and several tech stack."
    },
    {
      date: "02/20/2016",
      title: "Ruby on Rails Developer at AssemblyPayments",
      description: "Assembly is the world’s most flexible payments platform. The platform is the only end to end solution that lets you accept, manage and disburse payments in any way you imagine. \
        I worked as a backend developer for making the API robust, secured, and also built new features for the system."
    },
    {
      date: "09/17/2018",
      title: "Software Engineer at RevtechMedia",
      description: "Currently connected with RevtechMedia - a marketing company with a focus on consumer savings. They have several media web/app platforms which we are constantly innovating."
    }
  ]
  const [previousValue, setPreviousValue] = useState(0);
  const [value, setValue] = useState(data.length - 1);

  return(
    <>
      <div>
        <div style={{ width: '100%', height: '100px', margin: '0 auto' }}>
          <HorizontalTimeline
            index={value}
            indexClick={(index) => {
              console.log(value)
              setPreviousValue(value)
              setValue(index)
            }}
            styles={{ background: '#e14eca', foreground: '#ba54f5', outline: '#e14eca' }}
            values={data.map((d) => d.date)} />
        </div>
        <Card className="card-stats mt-lg-5">
          <CardBody>
            <Row>
              <Col md="12" className="mt-3">
                <p className="text-white" tag="h4">{data[value].description}</p>
              </Col>
            </Row>
            <Row>
              <Col md="12">
                <hr className="line-success info-horizontal" />
                <h3>{data[value].title}</h3>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    </>
  )
}

export default WorkTimeline;
