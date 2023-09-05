FROM node:18

WORKDIR /app

COPY package*.json ./

ENV DATABASE_URL=postgresql://postgres:Esotap96$Esotap96@db.cfuzbyppifviklagcdhs.supabase.co:5432/postgres
ENV SESSION_SECRET=1232131hbfdsoifaboDOIFHBDSO

RUN npm install

COPY . . 

EXPOSE 4000

CMD ["node", "app.js"]