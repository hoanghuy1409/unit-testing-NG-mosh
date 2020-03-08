import { VoteComponent } from "./vote.component";

describe("VoteComponent", () => {
  let component: VoteComponent;

  beforeEach(() => {
    component = new VoteComponent();
  });

  afterEach(() => {}); // run after each spec run
  beforeAll(() => {}); // run before all spec run
  afterAll(() => {}); // run after all spec run

  it("should increment totalVotes when upvoted", () => {
    component.upVote();

    expect(component.totalVotes).toBe(1);
  });

  it("should descrement totalVotes when downvoted", () => {
    component.downVote();

    expect(component.totalVotes).toBe(-1);
  });
});
