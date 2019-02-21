import { Link, StaticQuery, graphql } from 'gatsby';
import React, { useEffect, useState } from 'react';

import InfoModal from '../components/info-modal';
import Layout from '../components/layout';
import Leaderboard from '../components/leaderboard';
import SEO from '../components/seo';

const fetchStats = () => {
  return fetch('/api/stats?url=')
    .then(res => res.json())
    .catch(err => console.error(err));
};

export default () => {
  debugger;
  return (
    <Layout>
      <SEO />
      <div className="stats">
        <div className="stats-header">
          <div className="header-title">
            To help our sponsors make an informed choice, all of our metrics are
            public.
          </div>
          <div className="ad-select" />
        </div>
      </div>
    </Layout>
  );
};
