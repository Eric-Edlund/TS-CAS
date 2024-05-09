# Solid JS

5/8/24

Worked 42 hours.

## This Week

Imported SolidJS and redid most of the UI in JSX with signals. Much nicer. Did
lots of optimization on the existing rules and added more. Added lots more
integration tests. Fixed some ui bugs, adapted the derivation graph view to the
new backend, added a loading bar while deriving expressions (woah), fixed my
LinkedIn advertizement, added a link to some open source licenses for the
dependencies.

I cleaned out the cas library and published it to crates.io. I renamed the
repository and associated stuff to "ihateintegrals" and updated
ihateintegrals.com with the latest changes.

I moved the derivation work in to a WebWorker so it doesn't block the UI. The
backend supports incremental derivation operations so intermediate results can
be displayed as they're generated.

[Final Report](Final_Report.md)
