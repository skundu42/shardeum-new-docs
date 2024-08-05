import createMDX from 'fumadocs-mdx/config';


/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
};

const withMDX = createMDX({
  buildSearchIndex: {},
});

export default withMDX(config);
