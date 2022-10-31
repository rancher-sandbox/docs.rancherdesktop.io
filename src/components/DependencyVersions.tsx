import React, { useState, useEffect } from 'react';

export const DependencyVersions = (props) => {
    const url = `https://raw.githubusercontent.com/rancher-sandbox/rancher-desktop/${props.version}/src/assets/dependencies.yaml`;
    const [ versionData, setVersionData ] = useState(null);

    useEffect(() => {
        fetch(url)
        .then(response => response.text())
        .then(data => {
            setVersionData(data.replace('---',''));
        })
        .catch(error => {
            setVersionData(undefined);
        });
    }, []);

    return (
      <pre><code>{versionData}</code></pre>
    );
}

export  default DependencyVersions;