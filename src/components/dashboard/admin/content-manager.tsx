import { FileEdit, Image as ImageIcon, Layout, Plus, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export function ContentManager() {
  const [activeTab, setActiveTab] = useState('pages');
  
  const pages = [
    { title: "Homepage Banner", status: "Published", lastEdited: "2 days ago" },
    { title: "About Us", status: "Published", lastEdited: "1 week ago" },
    { title: "Terms of Service", status: "Draft", lastEdited: "3 hours ago" },
    { title: "Privacy Policy", status: "Published", lastEdited: "1 month ago" },
  ];

  return (
    <div className="glass-strong rounded-3xl p-6 border dark:border-foreground/10 border-foreground">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-xl font-bold text-foreground">Content Management</h3>
          <p className="text-sm dark:text-foreground/50 text-foreground">Manage website content, policies, and banners.</p>
        </div>
        <button className="flex items-center gap-2 bg-blue hover:bg-blue/90 text-white px-4 py-2 rounded-xl text-sm font-medium transition-colors shadow-lg shadow-blue/20">
          <Plus className="w-4 h-4" /> New Content
        </button>
      </div>

      <div className="flex gap-2 mb-6 p-1 bg-foreground/5 rounded-xl border dark:border-foreground/10 border-foreground w-fit">
        {['pages', 'banners', 'announcements'].map(tab => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-all capitalize ${
              activeTab === tab 
                ? 'bg-blue text-white shadow-lg shadow-blue/20' 
                : 'dark:text-foreground/60 text-foreground hover:text-foreground hover:bg-foreground/5'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="bg-background/50 border dark:border-foreground/10 border-foreground rounded-2xl overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b dark:border-foreground/10 border-foreground dark:text-foreground/40 text-foreground text-sm">
              <th className="py-4 px-6 font-medium">Title</th>
              <th className="py-4 px-6 font-medium">Status</th>
              <th className="py-4 px-6 font-medium">Last Edited</th>
              <th className="py-4 px-6 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {pages.map((page, i) => (
              <tr key={i} className="hover:bg-foreground/5 transition-colors">
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-foreground/5 flex items-center justify-center">
                      <Layout className="w-4 h-4 dark:text-foreground/60 text-foreground" />
                    </div>
                    <span className="font-medium text-foreground">{page.title}</span>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                    page.status === 'Published' 
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                      : 'bg-orange/10 text-orange border border-orange/20'
                  }`}>
                    {page.status === 'Published' ? <CheckCircle2 className="w-3 h-3" /> : <FileEdit className="w-3 h-3" />}
                    {page.status}
                  </span>
                </td>
                <td className="py-4 px-6 dark:text-foreground/50 text-foreground text-sm">{page.lastEdited}</td>
                <td className="py-4 px-6 text-right">
                  <button className="text-sm font-medium text-blue hover:text-blue/80 transition-colors">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
