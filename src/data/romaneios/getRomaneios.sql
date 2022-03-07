SELECT tra_codigo,
tra_tipo_transporte,
tpv.tpv_id,
id,
vtr_chassi,
vtr_placa,
documento,
cvt_nome,
tro.created_at,
tuf.tuf_sigla,
tab_descricao,
tpv_tem_condutor,
tpv_tem_chassi,
tpv_tem_placa
FROM tbl_doc_cond_veiculo_transp_roman dcv
LEFT JOIN tbl_orgao_expedidor oex ON oex.id=dcv.emissor
LEFT JOIN tbl_condutores_veiculos_transp_roman cvt ON cvt.cvt_id=dcv.cvt_id
LEFT JOIN tbl_veiculos_transp_roman vtr ON cvt.vtr_id = vtr.vtr_id
LEFT JOIN tbl_tipo_veiculo tpv ON tpv.tpv_id = vtr.tpv_id
LEFT JOIN tbl_transp_roman tro ON tro.id_transp_roman = vtr.id_transp_roman
LEFT JOIN tbl_transportador tra ON tra.tra_codigo=tro.id_transp_roman
LEFT JOIN tbl_tabelas tpt ON tpt.tab_chave=tra.tra_tipo_transporte AND tpt.tab_codigo=3
LEFT JOIN tbl_uf tuf ON tra.tuf_sigla=tuf.tuf_sigla
WHERE   1=1 AND tro.not_numero_roman = @romaneioId;