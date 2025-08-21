<h2>Controllers vs Services vs Repositories</h2>

<ul>
  <li><strong>Without services</strong>
    <ul>
      <li>Controller → directly calls repository methods</li>
      <li>Controller handles result, returns response</li>
    </ul>
  </li>

  <li><strong>With services</strong>
    <ul>
      <li>Controller → calls <strong>service</strong> (not repository directly)</li>
      <li>Service → autowires repository and handles DB logic</li>
      <li>Service can return a <strong>Result object</strong> (data, status, error messages)</li>
      <li>Controller unwraps result and decides what to send back</li>
    </ul>
  </li>

  <li><strong>Why use services</strong>
    <ul>
      <li>Cleaner separation of concerns</li>
      <li>Central place for <strong>try/catch</strong>, error handling, validation</li>
      <li>Easier to add extra logic without bloating controllers</li>
    </ul>
  </li>

  <li><strong>Key point</strong>
    <ul>
      <li>Conceptually no difference: you’re just calling methods</li>
      <li>Controllers still map URLs + HTTP verbs → methods</li>
      <li>Services are just classes with methods, but they make the app structure more maintainable</li>
    </ul>
  </li>
</ul>
