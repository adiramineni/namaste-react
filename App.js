const parent= React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child1"},
[React.createElement("h1",{},"iam h1tag")
,React.createElement("h2",{},"iam h2tag")]
),React.createElement("div",{id:"child2"},
[React.createElement("h1",{},"iam h1tag")
,React.createElement("h2",{},"iam h2tag")]
)]
);
    const root=ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent);