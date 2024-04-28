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
import { ListExample } from "./pages/05-lists/ListExample";
import { ListsChallenge } from "./pages/05-lists/ListsChallenge";
import { ListsPlayground } from "./pages/05-lists/ListsPlayground";
import { ListsSolution } from "./pages/05-lists/ListsSolution";
import { GitHubDirectoryChallenge } from "./pages/06-github-directory-challenge/GitHubDirectoryChallenge";
import { GitHubDirectoryPlayground } from "./pages/06-github-directory-challenge/GitHubDirectoryPlayground";
import { PortfolioChallenge } from "./pages/07-portfolio-challenge/PortfolioChallenge";
import { PortfolioPlayground } from "./pages/07-portfolio-challenge/PortfolioPlayground";
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

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="component">
        <Route
          path="concept"
          element={
            <ComponentConcept pathPrefix="component" title="Component" />
          }
        />
        <Route
          path="example"
          element={
            <ComponentExample pathPrefix="component" title="Component" />
          }
        />
        <Route
          path="challenge"
          element={
            <ComponentChallenge pathPrefix="component" title="Component" />
          }
        />
        <Route
          path="playground"
          element={
            <ComponentPlayground pathPrefix="component" title="Component" />
          }
        />
        <Route
          path="solution"
          element={
            <ComponentSolution pathPrefix="component" title="Component" />
          }
        />
      </Route>

      <Route path="jsx">
        <Route
          path="concept"
          element={<JSXConcept pathPrefix="jsx" title="JSX" />}
        />
        <Route
          path="example"
          element={<JSXExample pathPrefix="jsx" title="JSX" />}
        />
        <Route
          path="challenge"
          element={<JSXChallenge pathPrefix="jsx" title="JSX" />}
        />
        <Route
          path="playground"
          element={<JSXPlayground pathPrefix="jsx" title="JSX" />}
        />
        <Route
          path="solution"
          element={<JSXSolution pathPrefix="jsx" title="JSX" />}
        />
      </Route>

      <Route path="hello-world">
        <Route
          path="challenge"
          element={
            <HelloWorldChallenge
              pathPrefix="hello-world"
              title="Hello World Challenge"
            />
          }
        />
        <Route
          path="playground"
          element={
            <HelloWorldPlayground
              pathPrefix="hello-world"
              title="Hello World Challenge"
            />
          }
        />
      </Route>

      <Route path="props">
        <Route
          path="concept"
          element={<PropsConcept pathPrefix="props" title="Props" />}
        />
        <Route
          path="example"
          element={<PropsExample pathPrefix="props" title="Props" />}
        />
        <Route
          path="challenge"
          element={<PropsChallenge pathPrefix="props" title="Props" />}
        />
        <Route
          path="playground"
          element={<PropsPlayground pathPrefix="props" title="Props" />}
        />
        <Route
          path="solution"
          element={<PropsSolution pathPrefix="props" title="Props" />}
        />
      </Route>

      <Route path="lists">
        <Route
          path="concept"
          element={<ListsConcept pathPrefix="lists" title="Lists" />}
        />
        <Route
          path="example"
          element={<ListExample pathPrefix="lists" title="Lists" />}
        />
        <Route
          path="challenge"
          element={<ListsChallenge pathPrefix="lists" title="Lists" />}
        />
        <Route
          path="playground"
          element={<ListsPlayground pathPrefix="lists" title="Lists" />}
        />
        <Route
          path="solution"
          element={<ListsSolution pathPrefix="lists" title="Lists" />}
        />
      </Route>

      <Route path="github-directory">
        <Route
          path="challenge"
          element={
            <GitHubDirectoryChallenge
              pathPrefix="github-directory"
              title="GitHub Directory Challenge"
            />
          }
        />
        <Route
          path="playground"
          element={
            <GitHubDirectoryPlayground
              pathPrefix="github-directory"
              title="GitHub Directory Challenge"
            />
          }
        />
      </Route>

      <Route path="portfolio">
        <Route
          path="challenge"
          element={
            <PortfolioChallenge
              pathPrefix="portfolio"
              title="Portfolio Challenge"
            />
          }
        />
        <Route
          path="playground"
          element={
            <PortfolioPlayground
              pathPrefix="portfolio"
              title="Portfolio Challenge"
            />
          }
        />
      </Route>

      <Route path="event-handling">
        <Route
          path="concept"
          element={
            <EventHandlingConcept
              pathPrefix="event-handling"
              title="Event Handling"
            />
          }
        />
        <Route
          path="example"
          element={
            <EventHandlingExample
              pathPrefix="event-handling"
              title="Event Handling"
            />
          }
        />
        <Route
          path="challenge"
          element={
            <EventHandlingChallenge
              pathPrefix="event-handling"
              title="Event Handling"
            />
          }
        />
        <Route
          path="playground"
          element={
            <EventHandlingPlayground
              pathPrefix="event-handling"
              title="Event Handling"
            />
          }
        />
        <Route
          path="solution"
          element={
            <EventHandlingSolution
              pathPrefix="event-handling"
              title="Event Handling"
            />
          }
        />
      </Route>

      <Route path="form-submission">
        <Route
          path="concept"
          element={
            <FormSubmissionConcept
              pathPrefix="form-submission"
              title="Form Submission"
            />
          }
        />
        <Route
          path="example"
          element={
            <FormSubmissionExample
              pathPrefix="form-submission"
              title="Form Submission"
            />
          }
        />
        <Route
          path="challenge"
          element={
            <FormSubmissionChallenge
              pathPrefix="form-submission"
              title="Form Submission"
            />
          }
        />
        <Route
          path="playground"
          element={
            <FormSubmissionPlayground
              pathPrefix="form-submission"
              title="Form Submission"
            />
          }
        />
        <Route
          path="solution"
          element={
            <FormSubmissionSolution
              pathPrefix="form-submission"
              title="Form Submission"
            />
          }
        />
      </Route>
    </Routes>
  );
};
