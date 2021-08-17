type Props = {
  id: string;
  user_name: string;
};

export default class User {
  private readonly id: string;
  private readonly user_name: string;

  constructor(props: Props) {
    const { id, user_name } = props;

    this.id = id;
    this.user_name = user_name;
  }

  public get() {
    return {
      id: this.id,
      user_name: this.user_name,
    };
  }
}
