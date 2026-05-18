<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into this React + Vite portfolio site. PostHog (`posthog-js` + `@posthog/react`) was initialized in `src/main.jsx` with a `PostHogProvider` wrapping the entire app. Eight custom events were instrumented across six files to capture meaningful visitor interactions — from exploring projects to unlocking password-protected case studies and reaching out via the sidebar. Environment variables were written to `.env` and the PostHog public token is never hardcoded in source.

| Event | Description | File |
|-------|-------------|------|
| `case_study_viewed` | Fired when a visitor lands on a case study page — top of the project engagement funnel | `src/pages/CaseStudy.jsx` |
| `project_clicked` | Fired when a visitor clicks a public project card on the home page | `src/components/CaseStudy/CaseStudyBlock.jsx` |
| `protected_project_clicked` | Fired when a visitor clicks a password-protected project card, opening the unlock modal | `src/components/CaseStudy/CaseStudyBlock.jsx` |
| `password_submitted` | Fired when a visitor submits the project password — includes `outcome: "success"` or `"failure"` | `src/components/CaseStudy/BandhanModal.jsx` |
| `next_project_clicked` | Fired when a visitor clicks the next-project link in the case study footer nav | `src/components/CaseStudy/Template/CaseStudyFooterNav.jsx` |
| `contact_link_clicked` | Fired when a visitor clicks Email or LinkedIn in the sidebar — includes `channel: "email"` or `"linkedin"` | `src/components/Sidebar/Sidebar.jsx` |
| `link_copied` | Fired when a visitor clicks the "Copy link" button in the top bar | `src/components/TopBar/TopBar.jsx` |
| `sidebar_project_clicked` | Fired when a visitor navigates to a project via the sidebar project list | `src/components/Sidebar/Sidebar.jsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics dashboard](/dashboard/1599178)
- [Project clicks over time](/insights/zrEMAg1F) — daily trend of project card clicks
- [Case study views over time](/insights/WO0ioTae) — daily trend of case study page views
- [Project click → Case study funnel](/insights/dv0UGL4R) — conversion rate from home page project card click to full case study view
- [Contact link clicks by channel](/insights/qVIZ890s) — email vs LinkedIn sidebar clicks broken down by channel
- [Protected project unlock funnel](/insights/xveFnmH0) — how many visitors who open the password modal successfully unlock the project

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
