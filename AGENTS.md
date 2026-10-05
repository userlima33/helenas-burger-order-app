<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep editable restaurant catalog content in `src/data/menu.ts` so pricing and products stay separate from presentation logic.
- Keep store operating facts (contact number, opening hours, closed days, delivery fee and radius) in `src/data/store.ts` as the single source the UI and the open/closed status read from, so a change confirmed by the owner only has to be made once.
