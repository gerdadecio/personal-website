import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  UncontrolledTooltip,
} from "reactstrap";
import Tabs from "./Tabs";

const SocialLinks = ({items}) => {
  return items.map(item => (
    <>
      <Button
        className="btn-icon btn-sm"
        color={item.title}
        href={item.url}
        id={`tooltip${item.title}`}
        target="_blank"
      >
        <i className={`fab fa-${item.title}`} />
      </Button>
      <UncontrolledTooltip delay={0} target={`tooltip${item.title}`}>
        {item.tip}
      </UncontrolledTooltip>
    </>
  ))
}

const Profile = ({
  mainPhotoUrl,
  mainText,
  socialIcons,
  tabs
}) => {
  return(
    <>
      <Card className="card-coin card-plain">
        <CardHeader>
          {mainPhotoUrl && (
            <img
              alt="profile"
              className="img-center img-fluid rounded-circle"
              src={mainPhotoUrl}
            />)}
          <div className="btn-wrapper profile pt-3 text-center">
            <SocialLinks items={socialIcons} />
          </div>
        </CardHeader>
        <CardBody>
          <h4 className="text-center">{mainText}</h4>
          <Tabs items={tabs} />
        </CardBody>
      </Card>
    </>
  )
}

export default Profile;
