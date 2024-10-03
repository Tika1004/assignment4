const posts = [
    { id: 1, title: "First Post", content: "This is the first post." },
    { id: 2, title: "Second Post", content: "This is the second post." }
  ];
  
  function BlogPage() {
    return (
      <div>
        <h1>Blog</h1>
        {posts.map(post => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    );
  }
  
  export default BlogPage;
  const ProfilePage = () => {
    return (
      <div>
        <h1>Profile</h1>
        <form>
          <div>
            <label>Photo</label>
            <input type="file" name="photo" />
          </div>
          <div>
            <label>Name</label>
            <input type="text" name="name" placeholder="John" />
          </div>
          <div>
            <label>Surname</label>
            <input type="text" name="surname" placeholder="Doe" />
          </div>
          <div>
            <label>Email</label>
            <input type="email" name="email" placeholder="example@mail.com" />
          </div>
        </form>
      </div>
    );
  };
  
  export default ProfilePage;
  const people = [
    { name: "Marie Curie", profession: "chemist" },
    { name: "Albert Einstein", profession: "physicist" },
    { name: "Rosalind Franklin", profession: "biophysicist" },
    { name: "Dmitri Mendeleev", profession: "chemist" }
  ];
  
  const chemists = people.filter(person => person.profession === 'chemist');
  const others = people.filter(person => person.profession !== 'chemist');
  
  function PeopleList() {
    return (
      <div>
        <h1>Chemists</h1>
        <ul>
          {chemists.map(person => (
            <li key={person.name}>{person.name}</li>
          ))}
        </ul>
  
        <h1>Others</h1>
        <ul>
          {others.map(person => (
            <li key={person.name}>{person.name}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default PeopleList;
  function Recipe({ id, name, ingredients }) {
    return (
      <div key={id}>
        <h2>{name}</h2>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default Recipe;
  const recipes = [
    { id: 1, name: "Pancakes", ingredients: ["flour", "milk", "eggs"] },
    { id: 2, name: "Omelette", ingredients: ["eggs", "cheese", "ham"] }
  ];
  
  function RecipeList() {
    return (
      <div>
        {recipes.map(recipe => (
          <Recipe
            key={recipe.id}
            id={recipe.id}
            name={recipe.name}
            ingredients={recipe.ingredients}
          />
        ))}
      </div>
    );
  }
  
  export default RecipeList;
  function Clock() {
    const date = new Date();
    const hours = date.getHours();
    const isNight = hours >= 0 && hours < 6;
    
    return (
      <h1 className={isNight ? 'night' : 'day'}>
        {isNight ? "Good Night" : "Good Day"}
      </h1>
    );
  }
  
  export default Clock;
  function Profile({ name, surname }) {
    const [isCollapsed, setIsCollapsed] = React.useState(false);
  
    return (
      <div>
        <h1>{name} {surname}</h1>
        {!isCollapsed && <p>Details about {name}</p>}
        <button onClick={() => setIsCollapsed(!isCollapsed)}>
          {isCollapsed ? 'Expand' : 'Collapse'}
        </button>
      </div>
    );
  }
  
  function App() {
    return (
      <div>
        <Profile name="John" surname="Doe" />
        <Profile name="Jane" surname="Smith" />
      </div>
    );
  }
  
  export default App;
  const stories = [
    { id: 1, title: "Story 1" },
    { id: 2, title: "Story 2" }
  ];
  
  function StoryTray() {
    const [storyList, setStoryList] = React.useState(stories);
  
    // Ensure "Create Story" is added only once
    const displayStories = [...storyList, { id: "create", title: "Create Story" }];
  
    return (
      <div>
        {displayStories.map(story => (
          <div key={story.id}>
            <h3>{story.title}</h3>
          </div>
        ))}
      </div>
    );
  }
  
  export default StoryTray;
                