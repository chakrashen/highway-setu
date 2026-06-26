import fs from 'fs';
import path from 'path';

const filesToFix = [
  "src/components/ai/ai-assistant-widget.tsx",
  "src/components/notifications/notification-center.tsx",
  "src/components/chat/messaging-system.tsx",
  "src/components/payments/wallet.tsx",
  "src/components/subscriptions/pricing-plans.tsx",
  "src/components/dashboard/shared/loyalty-program.tsx",
  "src/components/dashboard/shared/advanced-analytics.tsx",
  "src/components/dashboard/shared/report-generator.tsx",
  "src/components/dashboard/admin/content-manager.tsx",
  "src/components/dashboard/admin/security-logs.tsx",
  "src/components/support/help-center.tsx",
  "src/components/layout/global-search.tsx",
  "src/routes/dashboard/admin.tsx",
  "src/routes/dashboard/fleet.tsx",
  "src/components/dashboard/fleet/driver-assignment.tsx",
  "src/components/dashboard/fleet/vehicle-management.tsx"
];

for (const relPath of filesToFix) {
  const filePath = path.resolve(process.cwd(), relPath);
  if (!fs.existsSync(filePath)) {
    console.log(`Skipping missing file: ${relPath}`);
    continue;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Safe replacements that don't depend on background color (opacity-based utilities)
  content = content.replace(/bg-white\//g, 'bg-foreground/');
  content = content.replace(/border-white\//g, 'border-foreground/');
  content = content.replace(/text-white\//g, 'text-foreground/');
  
  // Also fix hover states
  content = content.replace(/hover:bg-white\//g, 'hover:bg-foreground/');
  content = content.replace(/hover:text-white\//g, 'hover:text-foreground/');
  
  // Replace text-white and hover:text-white with text-foreground, but ONLY if the line doesn't contain a solid background color
  const lines = content.split('\n');
  const solidBgRegex = /bg-(blue|red|emerald|orange|purple|black|gradient)/;
  
  for (let i = 0; i < lines.length; i++) {
    if (!solidBgRegex.test(lines[i])) {
      lines[i] = lines[i].replace(/text-white/g, 'text-foreground');
      lines[i] = lines[i].replace(/hover:text-white/g, 'hover:text-foreground');
    }
  }
  
  content = lines.join('\n');
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Fixed: ${relPath}`);
}
