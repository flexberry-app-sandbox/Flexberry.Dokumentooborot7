﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Dokumentooborot7
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Т ч утверж док.
    /// </summary>
    // *** Start programmer edit section *** (ТЧУтвержДок CustomAttributes)

    // *** End programmer edit section *** (ТЧУтвержДок CustomAttributes)
    [AutoAltered()]
    [Caption("Т ч утверж док")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ТЧУтвержДокE", new string[] {
            "УтверждениеДок as \'Утверждение док\'",
            "УтверждениеДок.Дата as \'Дата\'",
            "УтверждениеДок.Утверждение",
            "УтверждениеДок.АвПользователи.Сотрудники.ФИОСотрудника"}, Hidden=new string[] {
            "УтверждениеДок.Дата"})]
    [MasterViewDefineAttribute("ТЧУтвержДокE", "УтверждениеДок", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Дата")]
    public class ТЧУтвержДок : ICSSoft.STORMNET.DataObject
    {
        
        private IIS.Dokumentooborot7.УтверждениеДок fУтверждениеДок;
        
        private IIS.Dokumentooborot7.ДокументСох fДокументСох;
        
        // *** Start programmer edit section *** (ТЧУтвержДок CustomMembers)

        // *** End programmer edit section *** (ТЧУтвержДок CustomMembers)

        
        /// <summary>
        /// Т ч утверж док.
        /// </summary>
        // *** Start programmer edit section *** (ТЧУтвержДок.УтверждениеДок CustomAttributes)

        // *** End programmer edit section *** (ТЧУтвержДок.УтверждениеДок CustomAttributes)
        [PropertyStorage(new string[] {
                "УтверждениеДок"})]
        [NotNull()]
        public virtual IIS.Dokumentooborot7.УтверждениеДок УтверждениеДок
        {
            get
            {
                // *** Start programmer edit section *** (ТЧУтвержДок.УтверждениеДок Get start)

                // *** End programmer edit section *** (ТЧУтвержДок.УтверждениеДок Get start)
                IIS.Dokumentooborot7.УтверждениеДок result = this.fУтверждениеДок;
                // *** Start programmer edit section *** (ТЧУтвержДок.УтверждениеДок Get end)

                // *** End programmer edit section *** (ТЧУтвержДок.УтверждениеДок Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТЧУтвержДок.УтверждениеДок Set start)

                // *** End programmer edit section *** (ТЧУтвержДок.УтверждениеДок Set start)
                this.fУтверждениеДок = value;
                // *** Start programmer edit section *** (ТЧУтвержДок.УтверждениеДок Set end)

                // *** End programmer edit section *** (ТЧУтвержДок.УтверждениеДок Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Dokumentooborot7.ДокументСох.
        /// </summary>
        // *** Start programmer edit section *** (ТЧУтвержДок.ДокументСох CustomAttributes)

        // *** End programmer edit section *** (ТЧУтвержДок.ДокументСох CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "ДокументСох"})]
        public virtual IIS.Dokumentooborot7.ДокументСох ДокументСох
        {
            get
            {
                // *** Start programmer edit section *** (ТЧУтвержДок.ДокументСох Get start)

                // *** End programmer edit section *** (ТЧУтвержДок.ДокументСох Get start)
                IIS.Dokumentooborot7.ДокументСох result = this.fДокументСох;
                // *** Start programmer edit section *** (ТЧУтвержДок.ДокументСох Get end)

                // *** End programmer edit section *** (ТЧУтвержДок.ДокументСох Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТЧУтвержДок.ДокументСох Set start)

                // *** End programmer edit section *** (ТЧУтвержДок.ДокументСох Set start)
                this.fДокументСох = value;
                // *** Start programmer edit section *** (ТЧУтвержДок.ДокументСох Set end)

                // *** End programmer edit section *** (ТЧУтвержДок.ДокументСох Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ТЧУтвержДокE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ТЧУтвержДокE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ТЧУтвержДокE", typeof(IIS.Dokumentooborot7.ТЧУтвержДок));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of ТЧУтвержДок.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfТЧУтвержДок CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfТЧУтвержДок CustomAttributes)
    public class DetailArrayOfТЧУтвержДок : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Dokumentooborot7.DetailArrayOfТЧУтвержДок members)

        // *** End programmer edit section *** (IIS.Dokumentooborot7.DetailArrayOfТЧУтвержДок members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type ТЧУтвержДок by index.
        /// </summary>
        /// <summary>
        /// Adds object with type ТЧУтвержДок.
        /// </summary>
        public DetailArrayOfТЧУтвержДок(IIS.Dokumentooborot7.ДокументСох fДокументСох) : 
                base(typeof(ТЧУтвержДок), ((ICSSoft.STORMNET.DataObject)(fДокументСох)))
        {
        }
        
        public IIS.Dokumentooborot7.ТЧУтвержДок this[int index]
        {
            get
            {
                return ((IIS.Dokumentooborot7.ТЧУтвержДок)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Dokumentooborot7.ТЧУтвержДок dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
