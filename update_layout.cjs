const fs = require('fs');

const files = [
  { path: 'src/pages/campus/Classrooms.tsx', array: 'spaces', var: 'space' },
  { path: 'src/pages/campus/LabsLibrary.tsx', array: 'hubs', var: 'facility' },
  { path: 'src/pages/campus/SportsPlaygrounds.tsx', array: 'sportsFacilities', var: 'facility' },
  { path: 'src/pages/campus/ArtsActivity.tsx', array: 'artsFacilities', var: 'facility' },
  { path: 'src/pages/campus/CafeteriaDining.tsx', array: 'commonSpaces', var: 'space' },
  { path: 'src/pages/campus/TransportFacilities.tsx', array: 'transportFeatures', var: 'facility' },
  { path: 'src/pages/campus/CampusFacilities.tsx', array: 'safetyPillars', var: 'facility' }
];

for (const file of files) {
  let content = fs.readFileSync(file.path, 'utf8');
  
  const startStr = `{${file.array}.map((${file.var}, idx) => (`;
  const startIndex = content.indexOf(startStr);
  if (startIndex === -1) {
    console.error(`Could not find start for ${file.path}`);
    continue;
  }
  
  const endStr = `\n        ))}`;
  const endIndex = content.indexOf(endStr, startIndex) + endStr.length;
  if (endIndex < endStr.length) {
    console.error(`Could not find end for ${file.path}`);
    continue;
  }
  
  const replacement = `${startStr}
          <div key={idx} className="space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                {${file.var}.title}
              </h3>
              <p className="text-slate-600 sm:text-lg leading-relaxed">
                {${file.var}.desc}
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden bg-slate-100 shadow-sm border border-slate-200">
              <img
                src={${file.var}.image}
                alt={${file.var}.title}
                className="w-full h-auto max-h-[600px] object-cover"
              />
            </div>
          </div>
        ))}`;

  content = content.substring(0, startIndex) + replacement + content.substring(endIndex);
  
  fs.writeFileSync(file.path, content);
  console.log(`Updated ${file.path}`);
}
