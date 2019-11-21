import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Meetups from './ViewKey';
import AddMeetup from './AddKey';
import EditMeetup from './UpdateKey';
import RemoveKey from './RemoveKey';


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/meetups' component={Meetups} />
      <Route exact path='/key' component={RemoveKey} />
      <Route exact path='/meetups/add' component={AddMeetup} />
      <Route exact path='/edit' component={EditMeetup} />
    </Switch>
  </main>
)

export default Main;