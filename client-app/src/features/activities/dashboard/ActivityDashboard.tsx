import React from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";
import ActivityList from "./ActivityList";
import { useStore } from "../../../app/stores/stores";
import { observer } from "mobx-react-lite";

export default observer(function ActivityDashboard() {
  const { activityStore } = useStore();
  const { selectedActivity, editMode } = activityStore;

  return (
    <Grid>
      <GridColumn width="10">
        <ActivityList />
      </GridColumn>
      <Grid.Column width="6">
        {selectedActivity && !editMode && <ActivityDetails />}
        {editMode && <ActivityForm />}
      </Grid.Column>
    </Grid>
  );
});
