import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { ComponentConcept } from "./pages/01-component/ComponentConcept";
import { ComponentExample } from "./pages/01-component/ComponentExample";
import { ComponentChallenge } from "./pages/01-component/ComponentChallenge";
import { ComponentPlayground } from "./pages/01-component/ComponentPlayground";
import { ComponentSolution } from "./pages/01-component/ComponentSolution";
import { JSXConcept } from "./pages/02-jsx/JSXConcept";
import { JSXExample } from "./pages/02-jsx/JSXExample";
import { JSXChallenge } from "./pages/02-jsx/JSXChallenge";
import { JSXPlayground } from "./pages/02-jsx/JSXPlayground";
import { JSXSolution } from "./pages/02-jsx/JSXSolution";
import { HelloWorldChallenge } from "./pages/03-hello-world-challenge/HelloWorldChallenge";
import { HelloWorldPlayground } from "./pages/03-hello-world-challenge/HelloWorldPlayground";
import { PropsConcept } from "./pages/04-props/PropsConcept";
import { PropsExample } from "./pages/04-props/PropsExample";
import { PropsChallenge } from "./pages/04-props/PropsChallenge";
import { PropsPlayground } from "./pages/04-props/PropsPlayground";
import { PropsSolution } from "./pages/04-props/PropsSolution";
import { ListsConcept } from "./pages/05-lists/ListsConcept";
import { ListsExample } from "./pages/05-lists/ListsExample";
import { ListsChallenge } from "./pages/05-lists/ListsChallenge";
import { ListsPlayground } from "./pages/05-lists/ListsPlayground";
import { ListsSolution } from "./pages/05-lists/ListsSolution";
import { GitHubDirectoryChallenge } from "./pages/06-github-directory-challenge/GitHubDirectoryChallenge";
import { GitHubDirectoryPlayground } from "./pages/06-github-directory-challenge/GitHubDirectoryPlayground";
import { PortfolioChallenge } from "./pages/07-portfolio-challenge/PortfolioChallenge";
import { PortfolioPlayground } from "./pages/07-portfolio-challenge/PortfolioPlayground";
import { ClassBasedComponentConcept } from "./pages/08-class-based-component/ClassBasedComponentConcept";
import { ClassBasedComponentExample } from "./pages/08-class-based-component/ClassBasedComponentExample";
import { ClassBasedComponentChallenge } from "./pages/08-class-based-component/ClassBasedComponentChallenge";
import { ClassBasedComponentPlayground } from "./pages/08-class-based-component/ClassBasedComponentPlayground";
import { ClassBasedComponentSolution } from "./pages/08-class-based-component/ClassBasedComponentSolution";
import { StateAndLifecycleConcept } from "./pages/09-state-and-lifecycle/StateAndLifecycleConcept";
import { StateAndLifecycleExample } from "./pages/09-state-and-lifecycle/StateAndLifecycleExample";
import { StateAndLifecycleChallenge } from "./pages/09-state-and-lifecycle/StateAndLifecycleChallenge";
import { StateAndLifecyclePlayground } from "./pages/09-state-and-lifecycle/StateAndLifecyclePlayground";
import { StateAndLifecycleSolution } from "./pages/09-state-and-lifecycle/StateAndLifecycleSolution";
import { ClassBasedCounterChallenge } from "./pages/10-class-based-counter-challenge/ClassBasedCounterChallenge";
import { ClassBasedCounterPlayground } from "./pages/10-class-based-counter-challenge/ClassBasedCounterPlayground";
import { UseStateConcept } from "./pages/11-useState-hook/UseStateConcept";
import { UseStateExample } from "./pages/11-useState-hook/UseStateExample";
import { UseStateChallenge } from "./pages/11-useState-hook/UseStateChallenge";
import { UseStatePlayground } from "./pages/11-useState-hook/UseStatePlayground";
import { UseStateSolution } from "./pages/11-useState-hook/UseStateSolution";
import { EventHandlingConcept } from "./pages/12-event-handling/EventHandlingConcept";
import { EventHandlingExample } from "./pages/12-event-handling/EventHandlingExample";
import { EventHandlingChallenge } from "./pages/12-event-handling/EventHandlingChallenge";
import { EventHandlingPlayground } from "./pages/12-event-handling/EventHandlingPlayground";
import { EventHandlingSolution } from "./pages/12-event-handling/EventHandlingSolution";
import { FormSubmissionConcept } from "./pages/13-form-submission/FormSubmissionConcept";
import { FormSubmissionExample } from "./pages/13-form-submission/FormSubmissionExample";
import { FormSubmissionChallenge } from "./pages/13-form-submission/FormSubmissionChallenge";
import { FormSubmissionPlayground } from "./pages/13-form-submission/FormSubmissionPlayground";
import { FormSubmissionSolution } from "./pages/13-form-submission/FormSubmissionSolution";
import { MUIConcept } from "./pages/14-mui/MUIConcept";
import { MUIExample } from "./pages/14-mui/MUIExample";
import { MUIChallenge } from "./pages/14-mui/MUIChallenge";
import { MUIPlayground } from "./pages/14-mui/MUIPlayground";
import { MUISolution } from "./pages/14-mui/MUISolution";
import { TakeHomeSalaryChallenge } from "./pages/15-take-home-salary-challenge/TakeHomeSalaryChallenge";
import { TakeHomeSalaryPlayground } from "./pages/15-take-home-salary-challenge/TakeHomeSalaryPlayground";
import { RandomPasswordGeneratorChallenge } from "./pages/16-random-password-generator-challenge/RandomPasswordGeneratorChallenge";
import { RandomPasswordGeneratorPlayground } from "./pages/16-random-password-generator-challenge/RandomPasswordGeneratorPlayground";
import { UseEffectConcept } from "./pages/17-useEffect-hook/UseEffectConcept";
import { UseEffectExample } from "./pages/17-useEffect-hook/UseEffectExample";
import { UseEffectChallenge } from "./pages/17-useEffect-hook/UseEffectChallenge";
import { UseEffectPlayground } from "./pages/17-useEffect-hook/UseEffectPlayground";
import { UseEffectSolution } from "./pages/17-useEffect-hook/UseEffectSolution";
import { GithubExplorerChallenge } from "./pages/18-github-explorer-challenge/GithubExplorerChallenge";
import { GithubExplorerPlayground } from "./pages/18-github-explorer-challenge/GithubExplorerPlayground";
import { WeatherAppChallenge } from "./pages/19-weather-app-challenge/WeatherAppChallenge";
import { WeatherAppPlayground } from "./pages/19-weather-app-challenge/WeatherAppPlayground";

export const AppRoutes = () => {
  const conceptRoutes = [
    {
      path: "component",
      title: "Component",
      routes: [
        {
          route: "concept",
          component: ComponentConcept,
        },
        {
          route: "example",
          component: ComponentExample,
        },
        {
          route: "challenge",
          component: ComponentChallenge,
        },
        {
          route: "playground",
          component: ComponentPlayground,
        },
        {
          route: "solution",
          component: ComponentSolution,
        },
      ],
    },
    {
      path: "jsx",
      title: "JSX",
      routes: [
        {
          route: "concept",
          component: JSXConcept,
        },
        {
          route: "example",
          component: JSXExample,
        },
        {
          route: "challenge",
          component: JSXChallenge,
        },
        {
          route: "playground",
          component: JSXPlayground,
        },
        {
          route: "solution",
          component: JSXSolution,
        },
      ],
    },
    {
      path: "props",
      title: "Props",
      routes: [
        {
          route: "concept",
          component: PropsConcept,
        },
        {
          route: "example",
          component: PropsExample,
        },
        {
          route: "challenge",
          component: PropsChallenge,
        },
        {
          route: "playground",
          component: PropsPlayground,
        },
        {
          route: "solution",
          component: PropsSolution,
        },
      ],
    },
    {
      path: "lists",
      title: "Lists",
      routes: [
        {
          route: "concept",
          component: ListsConcept,
        },
        {
          route: "example",
          component: ListsExample,
        },
        {
          route: "challenge",
          component: ListsChallenge,
        },
        {
          route: "playground",
          component: ListsPlayground,
        },
        {
          route: "solution",
          component: ListsSolution,
        },
      ],
    },
    {
      path: "class-based-component",
      title: "Class-based Component",
      routes: [
        {
          route: "concept",
          component: ClassBasedComponentConcept,
        },
        {
          route: "example",
          component: ClassBasedComponentExample,
        },
        {
          route: "challenge",
          component: ClassBasedComponentChallenge,
        },
        {
          route: "playground",
          component: ClassBasedComponentPlayground,
        },
        {
          route: "solution",
          component: ClassBasedComponentSolution,
        },
      ],
    },
    {
      path: "state-and-lifecycle",
      title: "State and Lifecycle",
      routes: [
        {
          route: "concept",
          component: StateAndLifecycleConcept,
        },
        {
          route: "example",
          component: StateAndLifecycleExample,
        },
        {
          route: "challenge",
          component: StateAndLifecycleChallenge,
        },
        {
          route: "playground",
          component: StateAndLifecyclePlayground,
        },
        {
          route: "solution",
          component: StateAndLifecycleSolution,
        },
      ],
    },
    {
      path: "useState",
      title: "UseState Hook",
      routes: [
        {
          route: "concept",
          component: UseStateConcept,
        },
        {
          route: "example",
          component: UseStateExample,
        },
        {
          route: "challenge",
          component: UseStateChallenge,
        },
        {
          route: "playground",
          component: UseStatePlayground,
        },
        {
          route: "solution",
          component: UseStateSolution,
        },
      ],
    },
    {
      path: "event-handling",
      title: "Event Handling",
      routes: [
        {
          route: "concept",
          component: EventHandlingConcept,
        },
        {
          route: "example",
          component: EventHandlingExample,
        },
        {
          route: "challenge",
          component: EventHandlingChallenge,
        },
        {
          route: "playground",
          component: EventHandlingPlayground,
        },
        {
          route: "solution",
          component: EventHandlingSolution,
        },
      ],
    },
    {
      path: "form-submission",
      title: "Form Submission",
      routes: [
        {
          route: "concept",
          component: FormSubmissionConcept,
        },
        {
          route: "example",
          component: FormSubmissionExample,
        },
        {
          route: "challenge",
          component: FormSubmissionChallenge,
        },
        {
          route: "playground",
          component: FormSubmissionPlayground,
        },
        {
          route: "solution",
          component: FormSubmissionSolution,
        },
      ],
    },
    {
      path: "mui",
      title: "Material UI",
      routes: [
        {
          route: "concept",
          component: MUIConcept,
        },
        {
          route: "example",
          component: MUIExample,
        },
        {
          route: "challenge",
          component: MUIChallenge,
        },
        {
          route: "playground",
          component: MUIPlayground,
        },
        {
          route: "solution",
          component: MUISolution,
        },
      ],
    },
    {
      path: "useEffect",
      title: "UseEffect Hook",
      routes: [
        {
          route: "concept",
          component: UseEffectConcept,
        },
        {
          route: "example",
          component: UseEffectExample,
        },
        {
          route: "challenge",
          component: UseEffectChallenge,
        },
        {
          route: "playground",
          component: UseEffectPlayground,
        },
        {
          route: "solution",
          component: UseEffectSolution,
        },
      ],
    },
  ];

  const challengeRoutes = [
    {
      path: "hello-world",
      title: "Hello World Challenge",
      routes: [
        {
          route: "challenge",
          component: HelloWorldChallenge,
        },
        {
          route: "playground",
          component: HelloWorldPlayground,
        },
      ],
    },
    {
      path: "github-directory",
      title: "GitHub Directory Challenge",
      routes: [
        {
          route: "challenge",
          component: GitHubDirectoryChallenge,
        },
        {
          route: "playground",
          component: GitHubDirectoryPlayground,
        },
      ],
    },
    {
      path: "portfolio",
      title: "Portfolio Challenge",
      routes: [
        {
          route: "challenge",
          component: PortfolioChallenge,
        },
        {
          route: "playground",
          component: PortfolioPlayground,
        },
      ],
    },
    {
      path: "class-based-counter",
      title: "Class Based Counter Challenge",
      routes: [
        {
          route: "challenge",
          component: ClassBasedCounterChallenge,
        },
        {
          route: "playground",
          component: ClassBasedCounterPlayground,
        },
      ],
    },
    {
      path: "take-home-salary",
      title: "Take Home Salary Challenge",
      routes: [
        {
          route: "challenge",
          component: TakeHomeSalaryChallenge,
        },
        {
          route: "playground",
          component: TakeHomeSalaryPlayground,
        },
      ],
    },
    {
      path: "random-password-generator",
      title: "Random Password Generator Challenge",
      routes: [
        {
          route: "challenge",
          component: RandomPasswordGeneratorChallenge,
        },
        {
          route: "playground",
          component: RandomPasswordGeneratorPlayground,
        },
      ],
    },
    {
      path: "github-explorer",
      title: "GitHub Explorer Challenge",
      routes: [
        {
          route: "challenge",
          component: GithubExplorerChallenge,
        },
        {
          route: "playground",
          component: GithubExplorerPlayground,
        },
      ],
    },
    {
      path: "weather-app",
      title: "Weather App Challenge",
      routes: [
        {
          route: "challenge",
          component: WeatherAppChallenge,
        },
        {
          route: "playground",
          component: WeatherAppPlayground,
        },
      ],
    },
  ];

  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {conceptRoutes.map(({ path, title, routes }) => (
        <Route path={path} key={path}>
          {routes.map(({ route, component }) => (
            <Route
              path={route}
              element={component({ title, pathPrefix: path })}
            />
          ))}
        </Route>
      ))}

      {challengeRoutes.map(({ path, title, routes }) => (
        <Route path={path} key={path}>
          {routes.map(({ route, component }) => (
            <Route
              path={route}
              element={component({ title, pathPrefix: path })}
            />
          ))}
        </Route>
      ))}
    </Routes>
  );
};
