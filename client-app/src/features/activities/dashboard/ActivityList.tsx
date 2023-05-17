import { Item, Segment } from "semantic-ui-react";
import { useStore } from "../../../app/stores/stores";
import { observer } from "mobx-react-lite";
import ActivityListItem from "./ActivityListItem";

export default observer(function ActivityList() {
  const { activityStore } = useStore();
  const { activitiesByDate } = activityStore;

  return (
    <Segment>
      <Item.Group>
        {activitiesByDate.map((activity) => (
          <ActivityListItem key={activity.id} activity={activity} />
        ))}
      </Item.Group>
    </Segment>
  );
});
