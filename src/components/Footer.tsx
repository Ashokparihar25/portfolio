export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Ashok Kumar Parihar. All rights reserved.</p>
        <p>Built with React & Tailwind CSS</p>
      </div>
    </footer>
  );
}
