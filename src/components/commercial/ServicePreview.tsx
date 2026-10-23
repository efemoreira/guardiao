import Link from 'next/link';
export default function ServicePreview() {
  return (
    <section className="bg-white py-10 md:py-14">
      <div className="mx-auto grid max-w-6xl items-center gap-7 px-4 md:grid-cols-2">
        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-red-700">Da visita ao próximo vencimento</p>
          <h2 className="mt-3 text-3xl font-bold text-secondary">Cada extintor tem um lugar e um histórico.</h2>
          <p className="mt-4 leading-relaxed text-slate-600">Tipo, capacidade, localização e vencimento reunidos em um inventário. É a base para avaliar os equipamentos e planejar a próxima manutenção.</p>
          <p className="mt-3 text-sm text-slate-600">Na conversa, peça um exemplo de relatório e confirme como será entregue o acompanhamento do seu imóvel.</p>
          <Link href="/orcamento?servico=inspecao" className="mt-5 inline-block font-semibold text-red-700 underline underline-offset-4">Quero avaliar meus extintores</Link>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-4"><h3 className="font-bold text-secondary">Inventário do imóvel</h3><span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-600">Exemplo fictício</span></div>
          <dl className="mt-4 grid grid-cols-2 gap-4 text-sm">
            <div><dt className="text-slate-500">Equipamento</dt><dd className="mt-1 font-bold text-secondary">ABC · 6 kg</dd></div>
            <div><dt className="text-slate-500">Localização</dt><dd className="mt-1 font-bold text-secondary">Hall de entrada</dd></div>
            <div><dt className="text-slate-500">Identificação</dt><dd className="mt-1 font-bold text-secondary">EXT-001</dd></div>
            <div><dt className="text-slate-500">Próximo passo</dt><dd className="mt-1 font-bold text-secondary">Conferir vencimento</dd></div>
          </dl>
          <ol className="mt-5 space-y-3 border-t border-slate-200 pt-4 text-sm text-slate-600"><li>01 · Cadastrar e identificar o equipamento</li><li>02 · Registrar inspeção e serviço executado</li><li>03 · Organizar comprovantes e próximo atendimento</li></ol>
          <p className="mt-4 text-xs text-slate-500">Demonstração da organização dos dados. Não é um laudo ou um registro de cliente real.</p>
        </div>
      </div>
    </section>
  );
}
