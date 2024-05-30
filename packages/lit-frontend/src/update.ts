import { APIRequest, JSONRequest } from "./rest";
import * as App from "./app";
// import { Profile } from "./models/profile";

const dispatch = App.createDispatch();

export default dispatch.update;

dispatch.addMessage("ProfileSelected", async (msg: App.Message) => {
  const { userid } = msg as App.ProfileSelected;

  try {
    const response = await new APIRequest().get(`/profiles/${userid}`);
    if (response.status === 200) {
      const profile = await response.json();
      console.log("Profile:", profile);
      return App.updateProps({ profile });
    }
  } catch (error) {
    console.error("Error fetching profile:", error);
  }

  return App.noUpdate;
});


dispatch.addMessage("ProfileSaved", async (msg: App.Message) => {
  const { userid, profile } = msg as App.ProfileSaved;

  try {
    const response = await new JSONRequest(profile).put(`/profiles/${userid}`);
    if (response.status === 200) {
      const updatedProfile = await response.json();
      console.log("Profile:", updatedProfile);
      return App.updateProps({ profile: updatedProfile });
    }
  } catch (error) {
    console.error("Error saving profile:", error);
  }

  return App.noUpdate;
});
