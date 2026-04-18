import type { ParsedWorkbook } from './parseExcel'

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const categories = ['Food', 'Drinks', 'Desserts', 'Catering', 'Delivery']
const channels = ['Instagram', 'Walk-in', 'Uber Eats', 'Website', 'Referral']

export function getDemoWorkbook(): ParsedWorkbook {
  const rows = months.flatMap((m, i) =>
    categories.map((cat) => ({
      Month: m,
      Category: cat,
      Channel: channels[(i + cat.length) % channels.length],
      Revenue: Math.round(1200 + Math.random() * 4800 + i * 120),
      Orders: Math.round(40 + Math.random() * 180 + i * 5)
    }))
  )
  return {
    fileName: 'demo-restaurant-sales.xlsx',
    sheets: [
      {
        name: 'Sales',
        columns: ['Month', 'Category', 'Channel', 'Revenue', 'Orders'],
        numericColumns: ['Revenue', 'Orders'],
        categoricalColumns: ['Month', 'Category', 'Channel'],
        dateColumns: [],
        rows
      }
    ]
  }
}
