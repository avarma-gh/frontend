import React, { useEffect, useState } from "react";

type Issue = {
  fields: {
    summary: string;
  };
};
// TODO: Add more fields as needed
const App: React.FC = () => {
  const [issueData, setIssueData] = useState<Issue | null>(null);

  useEffect(() => {
    const fetchIssue = async () => {
      try {
        const response = await fetch("/rest/api/3/issue/SCRUM-1");
        if (!response.ok) {
          throw new Error("Failed to fetch issue data");
        }
        const data: Issue = await response.json();
        setIssueData(data);
      } catch (error) {
        console.error("Error fetching issue:", error);
      }
    };

    fetchIssue();
  }, []);

  return (
    <div>
      <h2>VARMA Jira Plugin - Issue Details</h2>
      {issueData ? (
        <p>Summary: {issueData.fields.summary}</p>
      ) : (
        <p>Loading issue details...</p>
      )}
    </div>
  );
};

export default App;
