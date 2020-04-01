import React, { useState } from "react";
import PropTypes from 'prop-types'
import classnames from "classnames";
import {
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Badge
} from "reactstrap";

const defaultItems = [
  {
    title: 'Backend',
    badges: [
      {color: 'primary', text: 'Ruby & Rails'},
      {color: 'info', text: 'APIs'},
      {color: 'info', text: 'Third Party Integrations'},
      {color: 'success', text: 'Rspec'},
      {color: 'default', text: 'Capistrano'},
      {color: 'primary', text: 'CI/CD'},
      {color: 'default', text: 'Heroku'},
      {color: 'warning', text: 'AWS'},
      {color: 'warning', text: 'Microservices'},

    ]
  },
  {
    title: 'Frontend',
    badges: [
      {color: 'warning', text: 'Html/JS'},
      {color: 'info', text: 'ReactJs'},
      {color: 'success', text: 'Jest'},
      {color: 'success', text: 'Nodejs'},
      {color: 'primary', text: 'CSS/SCSS'},
      {color: 'default', text: 'Photoshop'},
    ]
  },
  {
    title: 'Others',
    badges: [
      {color: 'default', text: 'Coffee'},
      {color: 'success', text: 'Hikes'},
      {color: 'default', text: 'Sweets'},
      {color: 'danger', text: 'Reddit'},
    ]
  }
]

const Tabs = ({items}) => {
  const [tabs, setTabs] = useState(1);

  return(
    <>
      <Nav className="nav-tabs-primary justify-content-center" tabs>
        {items.map((item,index) => (
          <NavItem>
            <NavLink
              className={classnames({active: tabs === (index + 1)})}
              onClick={e => setTabs(index + 1)}
              href="#"
            > {item.title}
            </NavLink>
          </NavItem>
        ))}
      </Nav>
      <TabContent
          className="tab-subcategories"
          activeTab={"tab" + tabs}
        >
        {items.map((item,index) => (
          <TabPane tabId={`tab${index + 1}`}>
            {item.badges.map(badge => (
              <Badge color={badge.color} pill>{badge.text}</Badge>
            ))}
          </TabPane>
        ))}
      </TabContent>
    </>
  )
}

Tabs.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
  })).isRequired,
}

Tabs.defaultProps = {
  items: defaultItems
}

export default Tabs;
