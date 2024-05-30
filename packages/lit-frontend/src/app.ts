import { consume, createContext, provide } from "@lit/context";
import { property, state } from "lit/decorators.js";
import * as MVU from "./mvu";
import { Dispatch, MsgType, Update } from "./mvu";
import { AuthenticatedUser, APIUser } from "./rest";
import { Profile } from "./models/profile";

export interface Model {
  // tour?: Tour;
  user: APIUser;
  profile?: Profile;
}

export const context = createContext<Model>("MTVModel");

// TODO : profile shouldn't be set to undefined?
export const init: Model = {
  user: new APIUser(),
  profile: undefined,
};

export interface UserLoggedIn extends MsgType<"UserLoggedIn"> {
  user: AuthenticatedUser;
}

export interface ProfileSelected extends MsgType<"ProfileSelected"> {
  userid: string;
}

export interface ProfileSaved extends MsgType<"ProfileSaved"> {
  userid: string;
  profile: Profile;
}

// TODO do I need to pass in the userid here?
export interface PostCreated extends MsgType<"PostCreated"> {
  userid: string;
}

export type Message =
  | UserLoggedIn
  | ProfileSelected
  | ProfileSaved
  | PostCreated;

export const createDispatch = () => new Dispatch<Model, Message>();

export type Assignments = MVU.Assignments<Model>;

export const updateProps = MVU.updateProps<Model>;
export const noUpdate = MVU.noUpdate<Model>;

export class Main extends MVU.Main<Model, Message> {
  @provide({ context })
  @state()
  model: Model;

  constructor(update: Update<Model, Message>) {
    super(update, init);
    this.model = init;
  }
}

export class View extends MVU.View<Message> {
  @consume({ context: context, subscribe: true })
  @property({ attribute: false })
  _model: Model | undefined;

  getFromModel(path: keyof Model) {
    console.log("Accessing model for path:", path, "Model:", this._model);
    if (this._model) {
      return this._model[path];
    }
  }
}
